import alasql from 'alasql';
import currency from 'currency.js';

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

const BRL = value => currency(value, { symbol: 'R$ ', separator: '.', precision: 2, decimal: ',' });

alasql.fn.ROUNDER = function(x) {
  return roundToTwo(x);
};

class Database {
  constructor() {
    this._data = [];
    this._cols = [];
    this._rows = [];
    this._dataset = [];
  }

  set data(data) {
    this._data = data;
  }

  get cols() {
    return this._cols;
  }

  get rows() {
    return this._rows;
  }

  get dataset() {
    return this._dataset;
  }

  query = (grouped, aggregated, cb) => {
    const gSelect = grouped.map(gCol => `[${gCol.col}]`).join(',');
    const gGroup = grouped.map(gCol => `[${gCol.col}]`).join(',');

    const aGg = aggregated.map(aCol => `${aCol.fn}([${aCol.col}]) as ${aCol.col}`).join(',');
    const selectQuery = aGg.length ? `${gSelect}, ${aGg}` : gSelect;
    const queryString = `SELECT ${selectQuery} FROM ? GROUP BY ${gGroup}`;

    let result = gSelect.length ? alasql(queryString, [this._data]) : [];

    if (result.length) {
      let flatted = result.map(r => Object.values(r));
      const groupedCols = grouped.map(gCol => gCol.as);
      const aggregatedCols = aggregated.map(aCol => aCol.as);
      const headerCols = groupedCols.concat(aggregatedCols);

      this._cols = headerCols;
      this._rows = flatted.slice(0);

      flatted.unshift(headerCols);
      this._dataset = flatted;
    } else {
      this._cols = [];
      this._rows = [];
      this._dataset = result;
    }
    cb();
  };
}

export default new Database();
