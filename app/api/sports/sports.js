import { StandardApi } from 'data-grid/api/standard-api';

export class SportsApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new SportsApi('sports', null, {
    listAll: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/all_sports.php'
    }
});
