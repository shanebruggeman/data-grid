import { module, test } from 'qunit';
import { ApiEndpoint, StandardApi, StandardApiCollection } from 'data-grid/api/standard-api';

module('Unit | Api | standard api', function() {
    test('StandardApi | it creates a simple api', function (assert) {
        const simpleVariables = { apiKey: 'abcd', nullValue: null, undefinedValue: undefined };

        const simpleApi = new StandardApi('Simple api', simpleVariables, {
            simpleEndpoint: {
                url: 'https://example.com/simple-api'
            }
        });

        assert.equal(simpleApi.name, 'Simple api', 'Api name is set on initialization');
        assert.equal(simpleApi.variables, simpleVariables, 'Api variables are set on initialization');
        assert.ok(simpleApi.simpleEndpoint instanceof ApiEndpoint, 'An api endpoint was created');

        assert.equal(simpleApi.lookupVariable('apiKey'), 'abcd', 'Value in variables is returned');
        assert.equal(simpleApi.lookupVariable('nullValue'), null, 'Null value is returned');
        assert.equal(simpleApi.lookupVariable('undefinedValue'), undefined, 'Undefined value is returned');
        assert.throws(() => simpleApi.lookupVariable('nonexistent'));
    });

    test('StandardApi | it can create an api with nested keys', function (assert) {
        const nestedApi = new StandardApi('Nested api', {}, {
            shallowEndpoint: {
                example: {
                    url: 'https://example.com/shallow'
                }
            },
            topLevel: {
                nestedEndpoint: {
                    url: 'https://example.com/nested'
                }
            },
        });

        assert.ok(nestedApi.shallowEndpoint instanceof ApiEndpoint, 'It creates a shallow endpoint');
        assert.ok(nestedApi.topLevel.nestedEndpoint instanceof ApiEndpoint, 'It creates a nested endpoint');
    });

    test('StandardApiCollection | it creates a simple api collection', function (assert) {
        const salesApi = new StandardApi('Sales', { apiKey: 'sales-api-key' }, {
            listCustomers: {
                url: 'https://example-org/sales/customers'
            }
        });

        const marketingApi = new StandardApi('Marketing', { apiKey: 'marketing-api-key' }, {
            listCampaigns: {
                url: 'https://example-org/marketing/campaigns'
            }
        });

        const collectionVariables = { apiKey: 'collection-api-key' };
        const orgApi = new StandardApiCollection('Org Api', collectionVariables, [salesApi, marketingApi]);

        assert.equal(orgApi.name, 'Org Api', 'Collection name is set on initialization');
        assert.equal(orgApi.variables, collectionVariables, 'Collection variables are set on initialization');
    });

    test('ApiEndpoint | it builds the correct request url', function (assert) {
        const endpoint = new ApiEndpoint({ url: 'https://example.com' });
        assert.equal(endpoint.buildRequestUrl(), 'https://example.com', 'endpoint with no substitutions, no query params');

        const endpointWithQueryParams = new ApiEndpoint({
            url: 'https://example.com',
            queryParamsConfig: {
                department: {
                    qpid: 'dep'
                },
                state: {
                    qpid: 's'
                }
            }
        });

        const without = endpointWithQueryParams.buildRequestUrl({}, { region: 'southwest' });
        assert.equal(without, 'https://example.com', 'does not append unknown query params');

        const mixed = endpointWithQueryParams.buildRequestUrl({}, { region: 'southwest', state: 'AZ' });
        assert.equal(mixed, 'https://example.com?s=AZ', 'does not append unknown query params');

        const withQp = endpointWithQueryParams.buildRequestUrl({}, { department: 'engineering' });
        assert.equal(withQp, 'https://example.com?dep=engineering');

        const withMultipleQp = endpointWithQueryParams.buildRequestUrl({}, { department: 'engineering', state: 'OH' });
        assert.equal(withMultipleQp, 'https://example.com?dep=engineering&s=OH');
    });

    test('ApiEndpoint | it substitutes dynamic segments in the url', function (assert) {
        const endpoint = new ApiEndpoint({ url: 'https://example.com/{USER_ID}/analytics' });
        assert.equal(endpoint.buildRequestUrl({ USER_ID: 'user-123' }), 'https://example.com/user-123/analytics');

        // cannot build a url without substitutions
        assert.throws(() => endpoint.buildRequestUrl());
    });
});
