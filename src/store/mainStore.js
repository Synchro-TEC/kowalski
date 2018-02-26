import { store } from 'react-easy-state';
import titleProps from '../echarts-props/title';
import gridProps from '../echarts-props/grid';
import toolboxProps from '../echarts-props/toolbox';
import legendProps from '../echarts-props/legend';
import _set from 'lodash/set';

let Store = store({
  charts: ['A', 'B', 'C'],
  data: {},
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
    Store.data = data;
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
