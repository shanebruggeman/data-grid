import { StandardApi } from 'data-grid/api/standard-api';

export class PlayersApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new PlayersApi('players', null, {
    contracts: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupcontracts.php',
        queryParamsConfig: {
            playerId: {
                qpid: 'id',
                label: 'Player id',
                example: '34147178'
            }
        }
    },
    detail: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupplayer.php',
        queryParamsConfig: {
            playerId: {
                qpid: 'id',
                label: 'Player id',
                example: '34145937'
            }
        }
    },
    formerTeams: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupformerteams.php',
        queryParamsConfig: {
            playerId: {
                qpid: 'id',
                label: 'Player id',
                example: '34147178'
            }
        }
    },
    honors: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookuphonors.php',
        queryParamsConfig: {
            playerId: {
                qpid: 'id',
                label: 'Player id',
                example: '34147178'
            }
        }
    },
    lovedTeamsAndPlayers: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchloves.php',
        queryParamsConfig: {
            username: {
                qpid: 'u',
                label: 'Username',
                example: 'zag'
            }
        }
    },
    searchByName: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchplayers.php',
        queryParamsConfig: {
            playerName: {
                qpid: 'p',
                label: 'Player name'
            },
            teamName: {
                qpid: 't',
                label: 'Team name'
            }
        }
    }
});