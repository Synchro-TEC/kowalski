import React from 'react';
import Kowalski from 'kowalski';
import { SkyLightStateless } from 'react-skylight';
import Proptypes from 'prop-types';
import './App.css';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { view } from 'react-easy-state';

const App = ({ store }) => {
  const setCurrentChart = chartNumber => {
    debugger;
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
  debugger;
  return (
    <div className="app">
      <section style={{ textAlign: 'center' }}>
        <div style={{ width: '49%', float: 'left' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart1')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
          />
          <button onClick={() => setCurrentChart('chart1')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart2')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
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
          />
          <button onClick={() => setCurrentChart('chart3')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart4')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
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
          />
          <button onClick={() => setCurrentChart('chart5')}>Opções do Gráfico</button>
        </div>
        <div style={{ width: '49%', float: 'right' }}>
          <ReactEcharts
            notMerge={true}
            option={store.getChart('chart6')}
            echarts={echarts}
            style={{ height: '400px', margin: '0 auto' }}
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
