import { copy } from 'ember-copy';
import { module, test } from 'qunit';
import { StandardCell, StandardRow, StandardColumn } from 'data-grid/utils/grid';

module('Unit | Utility | grid', function() {
    const cellsFor = values => values.map(value => new StandardCell(value));

    test('StandardCell | it creates a grid cell', function (assert) {
        const standardCell = new StandardCell('value 1');
        assert.equal(standardCell.value, 'value 1', 'column has correct value');
    });

    test('StandardRow | it creates a grid row', function (assert) {
        const cells = cellsFor(['value 1', 'value 2']);
        const cellsCopy = copy(cells);

        const rowCells = new StandardRow(cellsCopy);
        assert.deepEqual(rowCells.cells, cells, 'row has correct cells')
    });

    test('StandardColumn | it creates a grid column', function (assert) {
        const cells = cellsFor(['column-1', 'column-2']);
        const cellsCopy = copy(cells);

        const columnCells = new StandardColumn(cellsCopy);
        assert.deepEqual(columnCells.cells, cells, 'column has correct cells');
    });
});
