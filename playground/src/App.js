import React from 'react';
import Kowalski from 'kowalski';
import { SkyLightStateless } from 'react-skylight';
import Proptypes from 'prop-types';
import './App.css';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { view } from 'react-easy-state';

echarts.registerTheme('kowalski', {
  color: [
    '#6D60B0',
    '#ff5061',
    '#fb9c49',
    '#0099d2',
    '#00c8bf',
    '#77c36f',
    '#b47dab',
    '#ff989b',
    '#74b7a9',
    '#5f7683',
    '#7a61f1',
    '#ebc95c',
    '#789df2',
    '#7eb00a',
  ],
  backgroundColor: 'rgba(0,0,0,0)',
  textStyle: {},
  title: {
    textStyle: {
      color: '#6e7578',
    },
    subtextStyle: {
      color: '#aaa',
    },
  },
  line: {
    itemStyle: {
      normal: {
        borderWidth: 1,
      },
    },
    lineStyle: {
      normal: {
        width: 2,
      },
    },
    symbolSize: 3,
    symbol: 'emptyCircle',
    smooth: true,
  },
  radar: {
    itemStyle: {
      normal: {
        borderWidth: 1,
      },
    },
    lineStyle: {
      normal: {
        width: 2,
      },
    },
    symbolSize: 3,
    symbol: 'emptyCircle',
    smooth: true,
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
      emphasis: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
    },
  },
  pie: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  boxplot: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  parallel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  sankey: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  funnel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  gauge: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#d87a80',
        color0: '#2ec7c9',
        borderColor: '#d87a80',
        borderColor0: '#2ec7c9',
        borderWidth: 1,
      },
    },
  },
  graph: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    lineStyle: {
      normal: {
        width: 1,
        color: '#aaaaaa',
      },
    },
    symbolSize: 3,
    symbol: 'emptyCircle',
    smooth: true,
    color: [
      '#2ec7c9',
      '#b6a2de',
      '#5ab1ef',
      '#ffb980',
      '#d87a80',
      '#8d98b3',
      '#e5cf0d',
      '#97b552',
      '#95706d',
      '#dc69aa',
      '#07a2a4',
      '#9a7fd1',
      '#588dd5',
      '#f5994e',
      '#c05050',
      '#59678c',
      '#c9ab00',
      '#7eb00a',
      '#6f5553',
      '#c14089',
    ],
    label: {
      normal: {
        textStyle: {
          color: '#eee',
        },
      },
    },
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: '#dddddd',
        borderColor: '#666464',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: 'rgba(160,193,217,1)',
        borderColor: '#444',
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: '#d87a80',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgb(255,255,255)',
        },
      },
    },
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: '#dddddd',
        borderColor: '#666464',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: 'rgba(160,193,217,1)',
        borderColor: '#444',
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: '#d87a80',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgb(255,255,255)',
        },
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#008acd',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#6e7578',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#6e7578',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#eee'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#008acd',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#6e7578',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#6e7578',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eee'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#008acd',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#6e7578',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#6e7578',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eee'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#008acd',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#6e7578',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#6e7578',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eee'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: '#a6a7a8',
      },
      emphasis: {
        borderColor: '#6e7578',
      },
    },
  },
  legend: {
    textStyle: {
      color: '#6e7578',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#008acd',
        width: '1',
      },
      crossStyle: {
        color: '#008acd',
        width: '1',
      },
    },
  },
  timeline: {
    lineStyle: {
      color: '#008acd',
      width: 1,
    },
    itemStyle: {
      normal: {
        color: '#008acd',
        borderWidth: 1,
      },
      emphasis: {
        color: '#a9334c',
      },
    },
    controlStyle: {
      normal: {
        color: '#008acd',
        borderColor: '#008acd',
        borderWidth: 0.5,
      },
      emphasis: {
        color: '#008acd',
        borderColor: '#008acd',
        borderWidth: 0.5,
      },
    },
    checkpointStyle: {
      color: '#2ec7c9',
      borderColor: 'rgba(46,199,201,0.4)',
    },
    label: {
      normal: {
        textStyle: {
          color: '#008acd',
        },
      },
      emphasis: {
        textStyle: {
          color: '#008acd',
        },
      },
    },
  },
  visualMap: {
    color: ['#5ab1ef', '#e0ffff'],
  },
  dataZoom: {
    backgroundColor: 'rgba(47,69,84,0)',
    dataBackgroundColor: 'rgba(239,239,255,1)',
    fillerColor: 'rgba(182,162,222,0.2)',
    handleColor: '#008acd',
    handleSize: '100%',
    textStyle: {
      color: '#6e7578',
    },
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: '#eee',
        },
      },
      emphasis: {
        textStyle: {
          color: '#eee',
        },
      },
    },
  },
});

const App = ({ store }) => {
  const setCurrentChart = chartNumber => {
    store.setCurrentChart(chartNumber);
  };

  const calcHeight = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  const modalHeight = calcHeight() - 80;

  const myBigDialog = {
    width: '94%',
    height: `${modalHeight}px`,
    marginTop: `-${modalHeight / 2}px`,
    marginLeft: '-47%',
    padding: '0',
  };

  return (
    <div className="app">
      <section style={{ textAlign: 'center' }}>
        <div style={{ width: '49%', float: 'left' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart1')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart1')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart2')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart2')}>Opções do Gráfico</button>
        </div>
      </section>
      <section style={{ textAlign: 'center' }}>
        <div style={{ width: '49%', float: 'left' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart3')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart3')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart4')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart4')}>Opções do Gráfico</button>
        </div>
      </section>
      <section style={{ textAlign: 'center' }}>
        <div style={{ width: '49%', float: 'left' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart5')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart5')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart6')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
            theme="kowalski"
          />
          <button onClick={() => setCurrentChart('chart6')}>Opções do Gráfico</button>
        </div>
      </section>
      <SkyLightStateless
        dialogStyles={myBigDialog}
        isVisible={store.showModal}
        onCloseClicked={store.clearCurrentChart}
      >
        {store.showModal ? (
          <Kowalski
            appName="Kowalski Playground"
            chart={store.getCurrentChart()}
            containerHeight={modalHeight}
            onFinish={store.updateChart}
            onCancel={() => console.log('sair')}
          />
        ) : (
          ''
        )}
      </SkyLightStateless>
    </div>
  );
};

App.propTypes = {
  store: Proptypes.any,
};

export default view(App);
