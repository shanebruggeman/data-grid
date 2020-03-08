import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class DataGridComponent extends Component {
    @service('sportsdb') sportsApi;

    @tracked cells;

    @computed('cells.@each.id')
    get headerCells() {
        const headerCells = this.cells.map(cell => ({ id: cell.id }));

        const uniqueHeaders = headerCells.reduce((cells, cell) => {
            const isRepeat = cells.find(c => c.id === cell.id);
            return isRepeat ? cells : cells.concat(cell);
        }, []);

        return uniqueHeaders;
    }

    constructor() {
        super(...arguments);

        this.cells = [];
        this.columnCount = 1;

        for (let i = 0; i < 100; i++) {
            this.cells.push({ id: i, label: i, value: i });
        }
    }

    updateColumnCount(count) {
        this.columnCount = count;
        document.querySelector('.data-grid').style.setProperty('--table-columns', count);
    }

    async querySports() {
        const sportsResponse = await this.sportsApi.sports.listAll.request({ dynamicSegments: { API_KEY: '1' }});
        const { sports } = await sportsResponse.json();

        return sports;
    }

    async buildSportsRows() {
        const sportsData = await this.querySports();

        return sportsData.map(sport => {
            return ['idSport', 'strSport', 'strFormat'].map(id => ({ id, value: sport[id] }));
        });
    }

    @action async changeData() {
        this.updateColumnCount(this.columnCount + 1);
    }

    @action async loadSports() {
        const sportsRows = await this.buildSportsRows();

        this.cells = sportsRows.flat();
        this.updateColumnCount(sportsRows[0].length);
    }
}

