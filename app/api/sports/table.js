import { StandardApi } from 'data-grid/api/standard-api';

export class TableApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new TableApi('table', null, {
    stats: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookuptable.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'l',
                label: 'League id',
                example: '4328'
            },
            seasonId: {
                qpid: 's',
                label: 'Season id',
                example: '1819'
            }
        }
    }
});