export class StandardTable {
    constructor(cells, options) {
        options = Object.assign({ columns: 1 }, options);

        this._cells = cells || [];
        this._columnCount = options.columns;
    }

    get rows() {
        const rows = [];
        const rowCount = Math.ceil(this._cells.length / this._columnCount);

        for (let i = 0; i < rowCount; i++) {
            const rowStart = i * this._columnCount;
            const rowEnd = (i + 1) * this._columnCount;
            const rowCells = this._cells.slice(rowStart, rowEnd);

            rows.push(new StandardRow(rowCells));
        }

        return rows;
    }

    get columns() {
        const columns = [];

        for (let i = 0; i < this._columnCount; i++) {
            const cells = this.rows.map(row => row.cells[i]);
            const columnCells = cells.flat().filter(c => c);

            if (columnCells.length) {
                columns.push(new StandardColumn(columnCells));
            }
        }

        return columns;
    }
}

export class StandardCell {
    constructor(value) {
        this._value = value;
    }

    intersect(gridObject) {
        gridObject = gridObject || {};

        const otherCells = gridObject.cells || [gridObject];
        return otherCells.find(cell => cell === this);
    }

    get value() {
        return this._value;
    }
}

export class StandardRow {
    constructor(cells) {
        this._cells = cells;
    }

    intersect(gridObject) {
        gridObject = gridObject || {};

        const isCell = gridObject instanceof StandardCell;
        const isColumn = gridObject instanceof StandardColumn;

        if (isCell || isColumn) {
            const otherCells = gridObject.cells || [gridObject];
            return this.cells.find(c => otherCells.includes(c));
        }
    }

    get cells() {
        return this._cells;
    }
}

export class StandardColumn {
    constructor(cells) {
        this._cells = cells;
    }

    intersect(gridObject) {
        gridObject = gridObject || {};

        const isRow = gridObject instanceof StandardRow;
        const isCell = gridObject instanceof StandardCell;

        if (isRow || isCell) {
            const otherCells = gridObject.cells || [gridObject];
            return this.cells.find(c => otherCells.includes(c));
        }
    }

    get cells() {
        return this._cells;
    }
}
