import { store } from 'react-easy-state';
import titleProps from '../echarts-props/title';
import gridProps from '../echarts-props/grid';
import toolboxProps from '../echarts-props/toolbox';
import legendProps from '../echarts-props/legend';
import _set from 'lodash/set';

// const prepareData = data => {
//   let vals = {};
//   let mapped = false;
//   for (let i = 0; i < data.length; i++) {
//     if (!mapped) {
//       Object.keys(data[i]).map(key => (vals[key] = []));
//       mapped = true;
//     }

//     for (let val in data[i]) {
//       if (
//         data[i].hasOwnProperty(val) &&
//         !Array.isArray(val) &&
//         Object.prototype.toString.call(val) !== '[object Object]'
//       ) {
//         vals[val].push(data[i][val]);
//       }
//     }
//   }
//   return vals;
// };

// let data = [
//   { bla: 'Seg', vv: 720, color: 'rgba(230, 207, 58, 1)' },
//   { bla: 'Ter', vv: 620, color: 'rgba(59, 97, 158, 1)' },
//   { bla: 'Qua', vv: 520, color: 'rgba(200, 88, 58, 1)' },
//   { bla: 'Qui', vv: 420, color: 'rgba(190, 227, 158, 1)' },
//   { bla: 'Sex', vv: 320, color: 'rgba(200, 107, 158, 1)' },
//   { bla: 'Sab', vv: 220, color: 'rgba(230, 27, 58, 1)' },
//   { bla: 'Dom', vv: 120, color: 'rgba(130, 127, 58, 1)' },
//   { bla: 'Seg-1', vv: 780, color: '' },
//   { bla: 'Ter-1', vv: 680, color: '' },
//   { bla: 'Qua-1', vv: 580, color: '' },
//   { bla: 'Qui-1', vv: 480, color: '' },
//   { bla: 'Sex-1', vv: 380, color: '' },
//   { bla: 'Sab-1', vv: 280, color: '' },
//   { bla: 'Dom-1', vv: 180, color: '' },
//   { bla: 'Seg-2', vv: 750, color: '' },
//   { bla: 'Ter-2', vv: 650, color: '' },
//   { bla: 'Qua-2', vv: 550, color: '' },
//   { bla: 'Qui-2', vv: 450, color: '' },
//   { bla: 'Sex-2', vv: 350, color: '' },
//   { bla: 'Sab-2', vv: 250, color: '' },
//   { bla: 'Dom-2', vv: 120, color: '' },
//   { bla: 'Seg-3', vv: 730, color: '' },
//   { bla: 'Ter-3', vv: 630, color: '' },
//   { bla: 'Qua-3', vv: 530, color: '' },
//   { bla: 'Qui-3', vv: 430, color: '' },
//   { bla: 'Sex-3', vv: 330, color: '' },
//   { bla: 'Sab-3', vv: 230, color: '' },
//   { bla: 'Dom-3', vv: 130, color: '' },
// ];

// // const legendData = data.map(d => d['bla']);
// const seriesData = data.map(d => {
//   return { name: d['bla'], value: d['vv'], itemStyle: { color: d['color'] } };
// });

// let originalData;
// let series;
// legendProps.data = data.map(d => d['bla']);

let Store = store({
  resize: false,
  plots: [
    { id: 'line', type: 'line', title: 'Linha', icon: 'line.png' },
    { id: 'area', type: 'line', title: 'Área', icon: 'area.png' },
    { id: 'bar', type: 'bar', title: 'Barras', icon: 'bar.png' },
    { id: 'pie', type: 'pie', title: 'Pizza', icon: 'pizza.png' },
    { id: 'stacked', type: 'bar', title: 'Barras Empilhadas', icon: 'stacked.png' },
  ],
  columns: [],
  series: null,
  chart: {
    title: titleProps,
    grid: [gridProps],
    toolbox: toolboxProps,
    legend: legendProps,
    dataset: {
      dimensions: [],
      source: [],
    },
  },
  selectedPlot: null,
  axisXSeted: false,
  updateGridOptions: gridValues => {
    Store.chart.grid[0].top = gridValues.top;
    Store.chart.grid[0].right = gridValues.right;
    Store.chart.grid[0].bottom = gridValues.bottom;
    Store.chart.grid[0].left = gridValues.left;
  },
  onResize: _ => {
    Store.resize = !Store.resize;
  },
  setValue: (key, val) => {
    _set(Store, key, val);
  },
  setData: data => {
    if (data) {
      Store.columns = Object.keys(data[0]);
      Store.chart.dataset.dimensions = [];
      Store.chart.dataset.source = data;
      Store.chart.xAxis = {
        type: 'category',
        show: false,
        axisLabel: {
          interval: 0,
          rotate: 75,
        },
      };
      Store.chart.yAxis = { type: 'value', show: false };
      Store.chart.series = [];
    }
  },
  setPlot: plot => {
    Store.selectedPlot = plot;
  },
  setAxisX: value => {
    if (value) {
      if (Store.axisXSeted) {
        Store.chart.dataset.dimensions.shift();
      }
      Store.chart.dataset.dimensions.unshift(value);
      Store.axisXSeted = true;
      Store.chart.xAxis.show = true;
    } else {
      Store.chart.dataset.dimensions.shift();
      Store.axisXSeted = false;
      Store.chart.xAxis.show = false;
    }
  },
  addSerie: value => {
    Store.chart.dataset.dimensions.push(value);
    let serie = {
      name: value,
      type: Store.selectedPlot.type,
    };

    if (Store.selectedPlot.id === 'stacked') {
      serie.stack = 'stack';
    }

    if (Store.selectedPlot.id === 'area') {
      serie.areaStyle = {};
    }

    Store.chart.series.push(serie);
  },
  removeSerie: index => {
    Store.chart.series.splice(index, 1);
    Store.removeDimension(index + 1);
  },
  removeDimension: index => {
    Store.chart.dataset.dimensions.splice(index, 1);
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
