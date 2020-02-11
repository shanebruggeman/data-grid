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
