import EventsApi from 'data-grid/api/sports/events';
import LeaguesApi from 'data-grid/api/sports/leagues';
import PlayersApi from 'data-grid/api/sports/players';
import SportsApi from 'data-grid/api/sports/sports';
import TableApi from 'data-grid/api/sports/table';
import TeamsApi from 'data-grid/api/sports/teams';

import { StandardApiCollection } from 'data-grid/api/standard-api';

export const SportsDbApi = new StandardApiCollection('sports',
    { API_KEY: '1' },
    [
        EventsApi,
        LeaguesApi,
        PlayersApi,
        SportsApi,
        TableApi,
        TeamsApi
    ]
);
