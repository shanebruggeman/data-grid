import { StandardApi } from 'data-grid/api/standard-api';

export class TeamsApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new TeamsApi('teams', null, {
    detail: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupteam.php',
        queryParamsConfig: {
            teamId: {
                qpid: 'id',
                label: 'Team id',
                example: '133604'
            }
        }
    },
    nextFiveEvents: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsnext.php',
        queryParamsConfig: {
            teamId: {
                qpid: 'id',
                label: 'Team id',
                example: '133602'
            }
        }
    },
    lastFiveEvents: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventslast.php',
        queryParamsConfig: {
            teamId: {
                qpid: 'id',
                label: 'Team id',
                example: '133602'
            }
        }
    },
    searchByName: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchteams.php',
        queryParamsConfig: {
            team: {
                qpid: 't',
                label: 'Freeform team name'
            }
        }
    },
    searchByShortName: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchteams.php',
        queryParamsConfig: {
            shortName: {
                qpid: 'sname',
                label: 'Team shortcode',
                example: 'ars'
            }
        }
    },
    /** PATREON */
    listPlayers: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookup_all_players.php',
        queryParamsConfig: {
            teamId: {
                qpid: 'id',
                label: 'Team id',
                example: '133604'
            }
        }
    },
    /** PATREON */
    searchPlayers: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchplayers.php',
        queryParamsConfig: {
            teamName: {
                qpid: 't',
                label: 'Team name',
                example: 'Arsenal'
            }
        }
    }
});