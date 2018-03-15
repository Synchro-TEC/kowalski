import { store } from 'react-easy-state';
import titleProps from '../echarts-props/title';
import gridProps from '../echarts-props/grid';
import toolboxProps from '../echarts-props/toolbox';
import legendProps from '../echarts-props/legend';
import _set from 'lodash/set';
import alasql from 'alasql';

let RAW_DATA = [];

let Store = store({
  resize: false,
  plots: [
    { id: 'line', type: 'line', title: 'Linha', icon: 'line.png' },
    { id: 'area', type: 'line', title: 'Área', icon: 'area.png' },
    { id: 'bar', type: 'bar', title: 'Barras', icon: 'bar.png' },
    { id: 'pie', type: 'pie', title: 'Pizza', icon: 'pizza.png' },
    { id: 'stacked', type: 'bar', title: 'Barras Empilhadas', icon: 'stacked.png' },
  ],
  data: [],
  columns: [],
  projectedCols: {
    grouped: [],
    aggregated: [],
  },
  series: null,
  chart: {
    title: titleProps,
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
    dataset: {
      dimensions: [],
      source: [],
    },
  },
  selectedPlot: null,
  axisXSeted: false,
  dataReceived: false,
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
    if (data.length) {
      RAW_DATA = data;
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
      Store.projectedCols.grouped.push({ col: col.columnName, as: col.columnLabel });
    }

    if (col.columnType === 'numeric') {
      Store.projectedCols.aggregated.push({ col: col.columnName, as: col.columnLabel, fn: 'SUM' });
    }

    Store.projectQuery();
  },
  projectQuery: _ => {
    const gSelect = Store.projectedCols.grouped.map(gCol => `[${gCol.col}]`).join(',');
    const gGroup = Store.projectedCols.grouped.map(gCol => `[${gCol.col}]`).join(',');
    const aGg = Store.projectedCols.aggregated.map(aCol => `${aCol.fn}([${aCol.col}]) as ${aCol.col}`).join(',');

    const selectQuery = aGg.length ? `${gSelect}, ${aGg}` : gSelect;
    const queryString = `SELECT ${selectQuery} FROM ? GROUP BY ${gGroup}`;
    debugger;
    console.time('GROUP');
    let result = alasql(queryString, [RAW_DATA]);
    console.timeEnd('GROUP');
    debugger;
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
