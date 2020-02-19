import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | sports', function(hooks) {
    setupTest(hooks);

    test('it creates the sports api', function () {
        const service = this.owner.lookup('service:sports');
    });
});
