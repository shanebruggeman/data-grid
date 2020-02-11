export class StandardCell {
  constructor(value) {
      this._value = value;
  }

  get value() {
      return this._value;
  }
}

export class StandardRow {
  constructor(cells) {
      this._cells = cells;
  }

  get cells() {
      return this._cells;
  }
}

export class StandardColumn {
  constructor(cells) {
      this._cells = cells;
  }

  get cells() {
      return this._cells;
  }
}
