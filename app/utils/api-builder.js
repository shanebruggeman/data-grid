import Service from '@ember/service';

export class ApiEndpoint {
    constructor({ url, environmentVariables, queryParamsConfig }) {
        this.url = url;
        this.environmentVariables = environmentVariables;
        this.queryParamsConfig = queryParamsConfig;
    }

    lookupDynamicSegment(key, dynamicSegments) {
        const lookupVariables = dynamicSegments || {};
        const environmentVariables = this.environmentVariables || {};

        return key in lookupVariables ? lookupVariables[key] :
               key in environmentVariables ? environmentVariables[key] :
               null;
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
                throw new Error('Required dynamic segment was not specified')
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
        const dynamicUrl = this.buildDynamicUrl(this.url, dynamicSegments);
        const paramStrings = this.buildQueryParams(queryParams, this.queryParamsConfig);
        const builtQueryParams = paramStrings.length ? `?${paramStrings.join()}` : '';

        const fetchUrl = `${dynamicUrl}${builtQueryParams}`;
        body = JSON.stringify(body || {});

        return method === 'post' || method === 'put' ? fetch(fetchUrl, { method, body }) : fetch(fetchUrl);
    }
}

export class API extends Service {
    constructor(apiConfig, ...superArgs) {
        super(...superArgs);
        this.buildApi(this, apiConfig);
    }

    buildApi(context, apiConfig) {
        if (!apiConfig) {
            throw new Error('Api configuration not specified');
        }

        for (let apiProperty in apiConfig) {
            const propertyConfig = apiConfig[apiProperty];


            if (propertyConfig.url) {
                const endpointProperties = Object.assign({
                    environmentVariables: this.environmentVariables
                }, propertyConfig);

                context[apiProperty] = new ApiEndpoint(endpointProperties);
            } else {
                context[apiProperty] = {};
                this.buildApi(context[apiProperty], propertyConfig);
            }
        }
    }
}

