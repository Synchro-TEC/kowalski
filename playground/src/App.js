import React, { Component } from 'react';
import Kowalski from 'kowalski';
import SkyLight from 'react-skylight';
import './App.css';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import chart1 from './chart1';
import chart2 from './chart2';
import chart3 from './chart3';
import chart4 from './chart4';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chart1: chart1,
      chart2: chart2,
      chart3: chart3,
      chart4: chart4,
      currentChart: null,
    };
    this.updateChart = this.updateChart.bind(this);
    this.editChart = this.editChart.bind(this);
    this.getChartOptions = this.getChartOptions.bind(this);
  }

  componentDidMount() {}

  editChart(chartId) {
    let newState = this.state;
    newState.currentChart = chartId;
    debugger;
    this.setState(newState, () => {
      setTimeout(() => {
        debugger;
        this.simpleDialog.show();
      }, 200);
    });
  }

  getChartOptions() {
    debugger;
    return Object.assign({}, this.state[this.state.currentChart]);
  }

  updateChart(newchart) {
    let newState = this.state;
    newState[this.state.currentChart] = newchart;
    this.setState(newState, () => this.simpleDialog.hide());
  }

  render() {
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
              option={this.state.chart1}
              echarts={echarts}
              style={{ height: '400px', margin: '0 auto' }}
            />
            <button onClick={() => this.editChart('chart1')}>Opções do Gráfico</button>
          </div>
          <div style={{ width: '49%', float: 'right' }}>
            <ReactEcharts
              notMerge={true}
              option={this.state.chart2}
              echarts={echarts}
              style={{ height: '400px', margin: '0 auto' }}
            />
            <button onClick={() => this.editChart('chart2')}>Opções do Gráfico</button>
          </div>
        </section>
        <section style={{ textAlign: 'center' }}>
          <div style={{ width: '49%', float: 'left' }}>
            <ReactEcharts
              notMerge={true}
              option={this.state.chart3}
              echarts={echarts}
              style={{ height: '400px', margin: '0 auto' }}
            />
            <button onClick={() => this.editChart('chart3')}>Opções do Gráfico</button>
          </div>
          <div style={{ width: '49%', float: 'right' }}>
            <ReactEcharts
              notMerge={true}
              option={this.state.chart4}
              echarts={echarts}
              style={{ height: '400px', margin: '0 auto' }}
            />
            <button onClick={() => this.editChart('chart4')}>Opções do Gráfico</button>
          </div>
        </section>
        <SkyLight dialogStyles={myBigDialog} ref={ref => (this.simpleDialog = ref)}>
          {this.state.currentChart ? (
            <Kowalski
              appName="Kowalski Playground"
              chart={this.getChartOptions()}
              containerHeight={modalHeight}
              onFinish={this.updateChart}
            />
          ) : (
            ''
          )}
        </SkyLight>
      </div>
    );
  }
}

export default App;
