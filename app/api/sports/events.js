import { StandardApi } from 'data-grid/api/standard-api';

export class EventsApi extends StandardApi {
    constructor(name, variables, apiConfig) {
        super(name, variables, apiConfig);
    }
}

export default new EventsApi('events', null, {
    detail: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupevent.php',
        queryParamsConfig: {
            eventId: {
                qpid: 'id',
                label: 'Event id',
                example: '441613'
            }
        }
    },
    /** PATREON */
    eventTV: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookuptv.php',
        queryParamsConfig: {
            eventId: {
                qpid: 'id',
                label: 'Event id',
                example: '584911'
            }
        }
    },
    /** PATREON */
    searchByDay: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsday.php',
        queryParamsConfig: {
            day: {
                qpid: 'd',
                label: 'Day string',
                example: '2014-10-10'
            },
            leagueName: {
                qpid: 'l',
                label: 'League name',
                example: 'Australian_A-League'
            }
        }
    },
    /** PATREON */
    searchTVEventsByChannel: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventstv.php',
        queryParamsConfig: {
            channelId: {
                qpid: 'c',
                label: 'Channel id',
                example: 'TSN_1'
            }
        }
    },
    /** PATREON */
    searchTVEventsByDay: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventstv.php',
        queryParamsConfig: {
            day: {
                qpid: 'd',
                label: 'Day string',
                example: '2019-09-28'
            },
            tvStationCountry: {
                qpid: 'a',
                label: 'TV Station Country',
                example: 'United_Kingdom'
            },
            sportName: {
                qpid: 's',
                label: 'Sport name',
                example: 'Cycling'
            }
        }
    },
    searchByEventFileName: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchfilename.php',
        queryParamsConfig: {
            eventFileName: {
                qpid: 'e',
                label: 'Event file name',
                example: 'English_Premier_League_2015-04-26_Arsenal_vs_Chelsea'
            }
        }
    },
    searchByEventName: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchevents.php',
        queryParamsConfig: {
            eventName: {
                qpid: 'e',
                label: 'Event name',
                example: 'Arsenal_vs_Chelsea'
            },
            sportId: {
                qpid: 's',
                label: 'Season id',
                example: '1617'
            }
        }
    },
    searchByRoundLeagueSeason: {
        url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/eventsround.php',
        queryParamsConfig: {
            leagueId: {
                qpid: 'id',
                label: 'League id',
                example: '4328'
            },
            roundId: {
                qpid: 'r',
                label: 'Round id',
                example: '38'
            },
            seasonId: {
                qpid: 's',
                label: 'Season id',
                example: '1415'
            }
        }
    }
});
