import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { store, view } from 'react-easy-state';
import styled from 'styled-components';
import Aside from './components/ui/aside';
import Article from './components/ui/article';
import Styledmain from './components/ui/main';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import titleProps from './echarts-props/title';
import gridProps from './echarts-props/grid';
import _set from 'lodash/set';
import SelectChartType from './components/partials/SelectChartType';
import TitleOptions from './components/partials/title/titleOptions';
import GridOptions from './components/partials/grid/gridOptions';
// import JSONTree from 'react-json-tree';

const data1 = [];

let state = store({
  charts: ['A', 'B', 'C'],
  data: [],
  chart: {
    title: titleProps,
    grid: gridProps,
  },
  setValue: (key, val) => {
    _set(state, key, val);
  },
  setData: data => {
    state.data = data;
  },
  selectedChart: null,
  setChartType: type => {
    state.selectedChart = type;
  },
  getOptions: _ => {
    return {
      title: state.chart.title,
      grid: state.chart.grid,
      legend: {
        data: data1.map(d => d.value),
      },
      toolbox: {
        right: 20,
        feature: {
          restore: {
            show: true,
            title: 'Reiniciar',
          },
          magicType: {
            type: ['bar', 'line'],
            title: {
              bar: 'Barras',
              line: 'Linhas',
            },
          },
          // dataView: {
          //   title: 'Dados',
          // },
          saveAsImage: {
            title: 'Salvar',
            pixelRatio: 2,
          },
        },
      },
      xAxis: [
        {
          show: true,
          type: 'category',
          name: 'Mes',
          gridIndex: 0,
          data: data1.map(d => d.month),
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
          data: data1,
        },
      ],
    };
  },
});

const Maincontainer = styled.div`
  height: 100%;
  width: 100%;
  font-size: 12px !important;
  display: box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

class Kowalski extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    state.setData(this.props.data);
  }

  render() {
    return (
      <Maincontainer>
        <Styledmain>
          <Aside>
            {this.props.allowSelectChart ? <SelectChartType state={state} /> : ''}
            <TitleOptions state={state} />
            <GridOptions state={state} />
          </Aside>
          <Article>
            <h2>{this.props.appName}</h2>
            <ReactEcharts option={state.getOptions()} />
            <pre>{JSON.stringify(state.chart, null, 2)}</pre>
          </Article>
          <Aside />
        </Styledmain>
      </Maincontainer>
    );
  }
}

Kowalski.propTypes = {
  appName: PropTypes.string.isRequired,
  allowSelectChart: PropTypes.bool,
  allowSelectData: PropTypes.bool,
};

export default view(Kowalski);
