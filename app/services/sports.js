import { API } from 'data-grid/utils/api-builder';

const apiConfig = {
    events: {
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
        },
    },
    leagues: {
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
    },
    players: {
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
    },
    sports: {
        listAll: {
            url: 'https://www.thesportsdb.com/api/v1/json/{API_KEY}/all_sports.php'
        }
    },
    table: {
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
    },
    teams: {
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
    }
};

export default class SportsApi extends API {
    constructor() {
        super(apiConfig, ...arguments);
    }

    get environmentVariables() {
        return {
            API_KEY: '1'
        };
    }
}
