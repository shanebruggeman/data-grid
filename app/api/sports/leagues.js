import { StandardApi } from 'data-grid/api/standard-api';

export class LeaguesApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new LeaguesApi('leagues', null, {
    detail: {
        url: 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'id',
                label: 'League id',
                example: '4346'
            }
        }
    },
    listAll: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/all_leagues.php'
    },
    listTeams: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookup_all_teams.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'id',
                label: 'League id',
                example: '4328'
            }
        }
    },
    nextFifteenEvents: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsnextleague.php',
        queryParamsConfig: {
            qpid: 'id',
            label: 'League id',
            example: '4328'
        }
    },
    lastFifteenEvents: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventspastleague.php',
        queryParamsConfig: {
            qpid: 'id',
            label: 'League id',
            example: '4328'
        }
    },
    searchTeams: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/search_all_teams.php',
        queryParamsConfig: {
            country: {
                qpid: 'c',
                label: 'Country name',
                example: 'Spain'
            },
            leagueName: {
                qpid: 'l',
                label: 'League name',
                example: 'English_Premier_League'
            },
            sportName: {
                qpid: 's',
                label: 'Sport name',
                example: 'Soccer'
            }
        }
    },
    listSeasons: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/search_all_seasons.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'id',
                label: 'League id',
                example: '4328'
            }
        }
    },
    searchSeasonEvents: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsseason.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'id',
                label: 'League id',
                example: '4328'
            },
            seasonId: {
                qpid: 's',
                label: 'Season id',
                example: '1415'
            }
        }
    },
    searchByCountry: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/search_all_leagues.php',
        queryParamsConfig: {
            countryName: {
                qpid: 'c',
                label: 'Country name',
                example: 'England'
            },
            sportName: {
                qpid: 's',
                label: 'Sport name',
                example: 'Soccer'
            }
        }
    }
});