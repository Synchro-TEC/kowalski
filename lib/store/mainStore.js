'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactEasyState = require('react-easy-state');

var _title = require('../echarts-props/title');

var _title2 = _interopRequireDefault(_title);

var _grid = require('../echarts-props/grid');

var _grid2 = _interopRequireDefault(_grid);

var _toolbox = require('../echarts-props/toolbox');

var _toolbox2 = _interopRequireDefault(_toolbox);

var _legend = require('../echarts-props/legend');

var _legend2 = _interopRequireDefault(_legend);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = (0, _reactEasyState.store)({
  charts: ['A', 'B', 'C'],
  data: {},
  chart: {
    title: _title2.default,
    grid: _grid2.default,
    toolbox: _toolbox2.default,
    legend: _legend2.default
  },
  setValue: function setValue(key, val) {
    (0, _set3.default)(Store, key, val);
  },
  setData: function setData(data) {
    Store.data = data;
  },
  selectedChart: null,
  setChartType: function setChartType(type) {
    Store.selectedChart = type;
  },
  getOptions: function getOptions(_) {
    return {
      title: Store.chart.title,
      grid: Store.chart.grid,
      legend: Store.chart.legend,
      toolbox: Store.chart.toolbox,
      xAxis: [{
        show: true,
        type: 'category',
        name: 'Mes',
        gridIndex: 0,
        data: [],
        position: 'bottom',
        splitLine: {
          show: false
        }
      }],
      yAxis: [{
        show: true,
        type: 'value',
        name: 'Total',
        splitLine: {
          show: false
        }
      }],
      series: [{
        type: 'line',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: []
      }]
    };
  }
});

exports.default = Store;