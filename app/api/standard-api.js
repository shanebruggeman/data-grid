export class ApiEndpoint {
    constructor({ url, queryParamsConfig }) {
        this.url = url;
        this.queryParamsConfig = queryParamsConfig;
    }

    lookupDynamicSegment(key, dynamicSegments) {
        const lookupVariables = dynamicSegments || {};
        const environmentVariables = this.environmentVariables || {};

        return key in lookupVariables ? lookupVariables[key] :
               key in environmentVariables ? environmentVariables[key] :
               null;
    }

    buildRequestUrl(dynamicSegments, queryParams) {
        const url = this.url;
        const dynamicUrl = this.buildDynamicUrl(url, dynamicSegments);
        const paramStrings = this.buildQueryParams(queryParams, this.queryParamsConfig);
        const builtQueryParams = paramStrings.length ? `?${paramStrings.join()}` : '';

        return `${dynamicUrl}${builtQueryParams}`;
    }

    buildDynamicUrl(url, dynamicSegments) {
        let dynamicUrl = url;
        const requiredSubstitutionKeys = url.matchAll(/\{([A-Z]+[_[A-Z]+]*)\}/g);

        for (let dynamicSegment of requiredSubstitutionKeys) {
            const [fullMatch, key] = dynamicSegment;
            const substitutionValue = this.lookupDynamicSegment(key, dynamicSegments);

            if (substitutionValue) {
                dynamicUrl = dynamicUrl.replace(
                    new RegExp(fullMatch, 'g'),
                    substitutionValue
                );
            } else {
                throw new Error(`Required dynamic segment ${key} was not specified`);
            }
        }

        return dynamicUrl;
    }

    buildQueryParams(queryParams, queryParamsConfig) {
        const suppliedParams = Object.keys(queryParams || {});
        const allowedParams = Object.keys(queryParamsConfig || {});
        const builtParams = suppliedParams.filter(supplied => allowedParams.includes(supplied));

        return builtParams.map(queryParam => {
            const { qpid } = queryParamsConfig[queryParam];
            const queryParamValue = queryParams[queryParam];

            return `${qpid}=${queryParamValue}`;
        });
    }

    request({ method = 'get', dynamicSegments, queryParams, body } = {}) {
        body = JSON.stringify(body || {});

        const fetchUrl = this.buildRequestUrl(dynamicSegments, queryParams);
        return method === 'post' || method === 'put' ? fetch(fetchUrl, { method, body }) : fetch(fetchUrl);
    }
}

export class StandardApi {
    name = 'standard-api'
    apiConfig = {}
    variables = {}

    constructor(name, variables, apiConfig) {
        this.name = name;
        this.variables = variables;
        this.apiConfig = apiConfig;

        this.constructApi(apiConfig);
    }

    constructApi(apiConfig) {
        if (!apiConfig) {
            throw new Error('Api configuration not specified');
        }

        for (let apiProperty in apiConfig) {
            const propertyConfig = apiConfig[apiProperty];

            if (propertyConfig.url) {
                Object.defineProperty(this, apiProperty, {
                    get: () => {
                        const endpoint = new ApiEndpoint(propertyConfig);
                        return Object.assign(endpoint, { variables: this.variables });
                    }
                });
            } else {
                this.constructApi({}, propertyConfig);
            }
        }
    }

    lookupVariable(name) {
        const allVariables = this.variables || {};
        const value = allVariables[name];

        if (name in allVariables) {
            return value;
        }

        throw new Error(`Variable ${name} was not found in api variables`);
    }
}

export class StandardApiCollection {
    name = 'standard-api-collection'
    apis = []
    variables = {}

    constructor(name, variables, apis) {
        this.name = name;
        this.apis = apis;
        this.variables = variables;

        this.constructApiCollection(apis);
    }

    constructApiCollection(apis) {
        apis.forEach(api => {
            Object.defineProperty(this, api.name, {
                get: () => {
                    return Object.assign({ variables: this.values, api });
                }
            });
        });
    }
}
