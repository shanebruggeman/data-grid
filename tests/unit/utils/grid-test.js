import { copy } from 'ember-copy';
import { module, test } from 'qunit';

import {
    StandardCell,
    StandardRow,
    StandardColumn,
    StandardTable
} from 'data-grid/utils/grid';

module('Unit | Utility | grid', function() {
    const cellsFor = values => values.map(value => new StandardCell(value));

    test('StandardCell | it creates a grid cell', function (assert) {
        const standardCell = new StandardCell('value 1');
        assert.equal(standardCell.value, 'value 1', 'column has correct value');
    });

    test('StandardCell | it finds intersections', function (assert) {
        const testCell = new StandardCell('Test Cell');
        const otherCell = new StandardCell('Other Cell');

        // bad input
        assert.notOk(testCell.intersect(), 'with no input');
        assert.notOk(testCell.intersect(NaN), 'with NaN input');
        assert.notOk(testCell.intersect(null), 'with null input');
        assert.notOk(testCell.intersect(undefined), 'with undefined input');
        assert.notOk(testCell.intersect([]), 'with array input');
        assert.notOk(testCell.intersect({}), 'with empty object input');
        assert.notOk(testCell.intersect(copy(testCell), 'with cell copy'));

        // with cells
        assert.ok(testCell.intersect(testCell, 'Cell intersects itself'));
        assert.notOk(testCell.intersect(otherCell), 'Cell cannot intersect a different cell');

        // with rows
        const containingRow = new StandardRow([testCell]);
        const nonContainingRow = new StandardRow([otherCell]);

        assert.ok(testCell.intersect(containingRow), 'Cell intersects containing row');
        assert.notOk(testCell.intersect(nonContainingRow), 'Cell does not intersect a non-containing row');

        // with columns
        const containingColumn = new StandardColumn([testCell]);
        const nonContainingColumn = new StandardColumn([otherCell]);

        assert.ok(testCell.intersect(containingColumn), 'Cell intersects containing column');
        assert.notOk(testCell.intersect(nonContainingColumn), 'Cell does not intersect a non-containing column');
    });

    test('StandardRow | it creates a grid row', function (assert) {
        const cells = cellsFor(['value 1', 'value 2']);
        const cellsCopy = copy(cells);

        const rowCells = new StandardRow(cellsCopy);
        assert.deepEqual(rowCells.cells, cells, 'row has correct cells')
    });

    test('StandardRow | it finds intersections', function (assert) {
        const cell1 = new StandardCell('Cell 1');
        const cell2 = new StandardCell('Cell 2');

        const testRow = new StandardRow([cell1]);
        const otherRow = new StandardRow([cell2]);

        // bad input
        assert.notOk(testRow.intersect(), 'with no input');
        assert.notOk(testRow.intersect(NaN), 'with NaN input');
        assert.notOk(testRow.intersect(null), 'with null input');
        assert.notOk(testRow.intersect(undefined), 'with undefined input');
        assert.notOk(testRow.intersect([]), 'with array input');
        assert.notOk(testRow.intersect({}), 'with empty object input');
        assert.notOk(testRow.intersect(copy(cell1)), 'with cell copy');

        // with cells
        assert.equal(testRow.intersect(cell1), cell1, 'Row intersects contained cell');
        assert.notOk(testRow.intersect(cell2), 'Row does not intersect cell not in the row');

        // with rows
        assert.notOk(testRow.intersect(testRow), 'Row does not intersect itself');
        assert.notOk(testRow.intersect(otherRow), 'Row does not intersect other row');

        // with columns
        const intersectingColumn = new StandardColumn([cell1]);
        const nonIntersectingColumn = new StandardColumn([cell2]);

        assert.equal(testRow.intersect(intersectingColumn), cell1, 'Row intersects column with the same cell');
        assert.notOk(testRow.intersect(nonIntersectingColumn), 'Row does not intersect column with no intersecting cells');
    });

    test('StandardColumn | it creates a grid column', function (assert) {
        const cells = cellsFor(['column-1', 'column-2']);
        const cellsCopy = copy(cells);

        const columnCells = new StandardColumn(cellsCopy);
        assert.deepEqual(columnCells.cells, cells, 'column has correct cells');
    });

    test('StandardColumn | it finds intersections', function (assert) {
        const cell1 = new StandardCell('Cell 1');
        const cell2 = new StandardCell('Cell 2');

        const testColumn = new StandardColumn([cell1]);
        const otherColumn = new StandardColumn([cell2]);

        // bad input
        assert.notOk(testColumn.intersect(), 'with no input');
        assert.notOk(testColumn.intersect(NaN), 'with NaN input');
        assert.notOk(testColumn.intersect(null), 'with null input');
        assert.notOk(testColumn.intersect(undefined), 'with undefined input');
        assert.notOk(testColumn.intersect([]), 'with array input');
        assert.notOk(testColumn.intersect({}), 'with empty object input');
        assert.notOk(testColumn.intersect(copy(cell1)), 'with cell copy');

        // with cells
        assert.equal(testColumn.intersect(cell1), cell1, 'Column intersects contained cell');
        assert.notOk(testColumn.intersect(cell2), 'Column does not intersect cell not in the row');

        // with rows
        const intersectingRow = new StandardRow([cell1]);
        const nonIntersectingRow = new StandardRow([cell2]);

        assert.equal(testColumn.intersect(intersectingRow), cell1, 'Column intersects row with the same cell');
        assert.notOk(testColumn.intersect(nonIntersectingRow), 'Column does not intersect row with no intersecting cells');

        // with columns
        assert.notOk(testColumn.intersect(testColumn), 'Column does not intersect itself');
        assert.notOk(testColumn.intersect(otherColumn), 'Column does not intersect other column');
    });

    test('StandardTable | it creates a table', function (assert) {
        const tableNoCells = new StandardTable();
        assert.deepEqual(tableNoCells.rows, [], 'Table without cells has no rows');
        assert.deepEqual(tableNoCells.columns, [], 'Table without cells has no columns');

        const tableCells = cellsFor([1, 2, 3, 4, 5, 6, 7]);
        const testTable = new StandardTable(tableCells, { columns: 3 });

        assert.deepEqual(testTable.rows.map(r => r.cells), [
            tableCells.slice(0, 3),
            tableCells.slice(3, 6),
            tableCells.slice(6, 9)
        ], 'Table has correct rows');

        assert.deepEqual(testTable.columns.map(c => c.cells), [
            [tableCells[0], tableCells[3], tableCells[6]],
            [tableCells[1], tableCells[4]],
            [tableCells[2], tableCells[5]],
        ], 'Table has correct columns')
    });
});
