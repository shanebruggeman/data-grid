import Service from '@ember/service';
import SportsApi from 'data-grid/api/sports/api';

const applyApiCollection = (context, collection) => {
    collection.apis.forEach(api => {
        context.set(api.name, api);
    });
};

export default class SportsdbService extends Service {
    constructor() {
        super(...arguments);
        applyApiCollection(this, SportsApi.SportsDbApi);
    }
}
