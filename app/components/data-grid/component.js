import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DataGridComponent extends Component {
    @service('sports') sportsApi;

    constructor() {
        super(...arguments);

        this.cells = [];
        this.columnCount = 1;

        for (let i = 0; i < 100; i++) {
            this.cells.push({ id: i, value: i });
        }
    }

    @action changeData() {
        this.columnCount++;
        document.querySelector('.data-grid').style.setProperty('--table-columns', this.columnCount);
    }

    @action async loadData() {
        await this.sportsApi.leagues.listAll.request();
    }
}

