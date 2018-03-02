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

let data = [
  { bla: 'Seg', vv: 720, color: 'rgba(230, 207, 58, 1)' },
  { bla: 'Ter', vv: 620, color: 'rgba(59, 97, 158, 1)' },
  { bla: 'Qua', vv: 520, color: 'rgba(200, 88, 58, 1)' },
  { bla: 'Qui', vv: 420, color: 'rgba(190, 227, 158, 1)' },
  { bla: 'Sex', vv: 320, color: 'rgba(200, 107, 158, 1)' },
  { bla: 'Sab', vv: 220, color: 'rgba(230, 27, 58, 1)' },
  { bla: 'Dom', vv: 120, color: 'rgba(130, 127, 58, 1)' },
];

const legendData = data.map(d => d['bla']);
const seriesData = data.map(d => {
  return { name: d['bla'], value: d['vv'], itemStyle: { color: d['color'] } };
});

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
      series: [
        {
          name: 'Obrigação',
          radius: ['40%', '65%'],
          center: ['50%', '50%'],
          itemStyle: {
            opacity: 0.9,
            borderWidth: 2,
            borderColor: '#fff',
          },
          data: seriesData,
          type: 'pie',
        },
      ],
    };
  },
});

export default Store;

//EXEMPLO GRAFICO PIZZA

/**

 let data = [
 {bla: 'Seg', vv: 720, color: "rgba(230, 207, 58, 1)"},
 {bla: 'Ter', vv: 620, color: "rgba(59, 97, 158, 1)"},
 {bla: 'Qua', vv: 520, color: "rgba(200, 88, 58, 1)"},
 {bla: 'Qui', vv: 420, color: "rgba(190, 227, 158, 1)"},
 {bla: 'Sex', vv: 320, color: "rgba(200, 107, 158, 1)"},
 {bla: 'Sab', vv: 220, color: "rgba(230, 27, 58, 1)"},
 {bla: 'Dom', vv: 120, color: "rgba(130, 127, 58, 1)"}
 ];

 var legendData = data.map(d => d['bla']);
 var seriesData = data.map(d => {return {name: d['bla'], value: d['vv'], itemStyle: {color:d['color']}}});
 // debugger;
 option = {
    title : {
        text: 'Teste',
        subtext: 'asd asd asd ',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 50,
        top: 50,
        bottom: 20,
        data: legendData
    },
    series: [
        {
            name: 'Obrigação',
            radius : ['40%', '65%'],
            // radius : '65%',
            center: ['50%', '50%'],
            itemStyle: {
                opacity: 0.9,
                borderWidth: 2,
                borderColor: '#fff'
            },
            // itemStyle: {
            //     emphasis: {
            //         shadowBlur: 10,
            //         shadowOffsetX: 0,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //     }
            // },
            data: seriesData,
            type: 'pie'
        }

    ]
};


 **/
