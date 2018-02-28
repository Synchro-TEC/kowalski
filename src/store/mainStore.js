import { store } from 'react-easy-state';
import titleProps from '../echarts-props/title';
import gridProps from '../echarts-props/grid';
import toolboxProps from '../echarts-props/toolbox';
import legendProps from '../echarts-props/legend';
import _set from 'lodash/set';

const prepareData = data => {
  let vals = {};
  let mapped = false;
  for (let i = 0; i < data.length; i++) {
    if (!mapped) {
      Object.keys(data[i]).map(key => (vals[key] = []));
      mapped = true;
    }

    for (let val in data[i]) {
      if (
        data[i].hasOwnProperty(val) &&
        !Array.isArray(val) &&
        Object.prototype.toString.call(val) !== '[object Object]'
      ) {
        vals[val].push(data[i][val]);
      }
    }
  }
  return vals;
};

let originalData;
let series;

let Store = store({
  charts: ['A', 'B', 'C'],
  columns: [],
  series: null,
  chart: {
    title: titleProps,
    grid: gridProps,
    toolbox: toolboxProps,
    legend: legendProps,
  },
  setValue: (key, val) => {
    _set(Store, key, val);
  },
  setData: data => {
    originalData = data;
    series = prepareData(data);
    Store.columns = Object.keys(data[0]);
  },
  selectedChart: null,
  setChartType: type => {
    Store.selectedChart = type;
  },
  getOptions: _ => {
    return {
      title: Store.chart.title,
      grid: Store.chart.grid,
      legend: Store.chart.legend,
      toolbox: Store.chart.toolbox,
      xAxis: [
        {
          show: true,
          type: 'category',
          name: 'Mes',
          gridIndex: 0,
          data: [],
          position: 'bottom',
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          show: true,
          type: 'value',
          name: 'Total',
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: [],
        },
      ],
    };
  },
});

export default Store;
