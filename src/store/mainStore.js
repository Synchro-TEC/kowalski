import { store } from 'react-easy-state';
import createTitleOptions from '../echarts-props/title';
import gridProps from '../echarts-props/grid';
import toolboxProps from '../echarts-props/toolbox';
import legendProps from '../echarts-props/legend';
import Database from '../database/data';
import _set from 'lodash/set';
import _get from 'lodash/get';

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
  lastExecutedQuery: null,
  projectedCols: {
    grouped: [],
    aggregated: [],
  },
  series: null,

  chart: {},
  selectedPlot: null,
  axisXSeted: false,
  dataReceived: false,
  createDefaultChart: () => {
    let defaultChart = {
      title: createTitleOptions(),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
          },
        },
      },
      grid: [gridProps],
      toolbox: toolboxProps,
      legend: legendProps,
      series: [],
    };

    return Object.assign({}, defaultChart);
  },
  initialize: chart => {
    Store.chart = Store.createDefaultChart();
    debugger;
    Object.keys(chart).forEach(key => {
      Store.chart[key] = chart[key];
    });
  },
  onFinish: () => {
    Store.chart = {};
  },
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
  // setValueWithIndex: (index, key, val) => {
  //   _set(Store, `${key}[${index}]`, val);
  // },
  setData: data => {
    if (data.length) {
      Database.data = data;
      Store.dataReceived = true;
      // Store.columns = Object.keys(data[0]);
      // Store.chart.dataset.dimensions = [];
      // Store.chart.dataset.source = data;
      // Store.chart.xAxis = {
      //   type: 'category',
      //   show: false,
      //   boundaryGap: false,
      //   axisLabel: {
      //     interval: 0,
      //     rotate: 75,
      //     formatter: (value, index) => {
      //       let val = value;
      //       if (typeof val === 'string' || val instanceof String) {
      //         val = val.substring(0, 20);
      //       }
      //       return val;
      //     },
      //   },
      //   axisLine: {
      //     show: true,
      //   },
      // };
      // Store.chart.yAxis = { type: 'value', show: true };
      // Store.chart.series = [];
    }
  },
  setColumns: schema => {
    Store.columns = schema;
  },
  setPlot: plot => {
    Store.selectedPlot = plot;
  },
  setProjection: col => {
    //['varchar', 'numeric', 'timestamp']
    if (col.columnType === 'varchar') {
      const alreadyIndexed = Store.projectedCols.grouped.findIndex(gCol => gCol.col === col.columnName);

      if (alreadyIndexed >= 0) {
        Store.projectedCols.grouped.splice(alreadyIndexed, 1);
      } else {
        Store.projectedCols.grouped.push({ col: col.columnName, as: col.columnLabel });
      }
    }

    if (col.columnType === 'numeric') {
      const alreadyIndexed = Store.projectedCols.aggregated.findIndex(aCol => aCol.col === col.columnName);

      if (alreadyIndexed >= 0) {
        Store.projectedCols.aggregated.splice(alreadyIndexed, 1);
      } else {
        Store.projectedCols.aggregated.push({ col: col.columnName, as: col.columnLabel, fn: 'SUM' });
      }
    }

    Database.query(Store.projectedCols.grouped, Store.projectedCols.aggregated, Store.queryExecuted);
  },
  queryExecuted: _ => {
    Store.lastExecutedQuery = new Date().getTime();
    Store.chart.dataset.source = Database.dataset;
    Store.chart.series = [];
    Database.cols.forEach((col, index) => {
      if (index > 0) {
        Store.chart.yAxis = {};
        Store.chart.xAxis.show = true;
        Store.chart.xAxis.boundaryGap = true;
        Store.chart.xAxis.axisLine.show = true;
        let serie = {
          name: col,
          type: 'line',
        };
        Store.chart.series.push(serie);
      } else {
        Store.chart.xAxis = {
          type: 'category',
          show: false,
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: 75,
            formatter: (value, index) => {
              let val = value;
              if (typeof val === 'string' || val instanceof String) {
                val = val.substring(0, 20);
              }
              return val;
            },
          },
          axisLine: {
            show: true,
          },
        };
      }
    });
  },
  setAxisX: value => {
    if (value) {
      if (Store.axisXSeted) {
        Store.chart.dataset.dimensions.shift();
      }
      Store.chart.dataset.dimensions.unshift(value);
      Store.axisXSeted = true;
    } else {
      Store.chart.dataset.dimensions.shift();
      Store.axisXSeted = false;
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
      serie.areaStyle = { normal: {} };
      serie.stack = 'stack';
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
  updateSerieProp: (index, prop, value) => {
    _set(Store.chart.series[index], prop, value);
  },
  updateSeriePieProp: (prop, value) => {
    _set(Store.chart.series[0], prop, value);
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
