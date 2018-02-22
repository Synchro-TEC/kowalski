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
import _set from 'lodash/set';
import SelectChartType from './components/partials/SelectChartType';
import TitleOptions from './components/partials/title/titleOptions';

const data1 = [
  { month: 'Jan', value: 252 },
  { month: 'Fev', value: 212 },
  { month: 'Mar', value: 282 },
  { month: 'Abr', value: 233 },
  { month: 'Mai', value: 127 },
  { month: 'Jun', value: 320 },
];

let state = store({
  charts: ['A', 'B', 'C'],
  chart: {
    title: titleProps,
  },
  setValue: (key, val) => {
    _set(state, key, val);
  },
  selectedChart: null,
  setChartType: type => {
    state.selectedChart = type;
  },
  getOptions: _ => {
    return {
      title: state.chart.title,
      xAxis: [
        {
          show: true,
          type: 'time',
          name: 'Date',
          gridIndex: 0,
          position: 'bottom',
        },
      ],
      yAxis: [
        {
          show: true,
          type: 'value',
          name: 'my axis',
        },
      ],
      series: [
        {
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: [
            [1509762600, 7.11376],
            [1509766200, 7.13389],
            [1509832200, 7.53564],
            [1509832800, 7.54459],
            [1509834000, 7.54566],
            [1509835200, 7.55541],
            [1509849000, 7.64559],
          ],
          markLine: {
            data: [
              // 1st line we want to draw
              [
                // start point of the line
                // we have to defined line attributes only here (not in the end point)
                {
                  xAxis: 1509762600,
                  yAxis: 3,
                  symbol: 'none',
                  lineStyle: {
                    normal: {
                      color: '#00F',
                    },
                  },
                  label: {
                    normal: {
                      show: true,
                      position: 'end',
                      formatter: 'my label',
                    },
                  },
                },
                // end point of the line
                {
                  xAxis: 1509849000,
                  yAxis: 3,
                  symbol: 'none',
                },
              ],
            ],
          },
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

  render() {
    return (
      <Maincontainer>
        <Styledmain>
          <Aside>
            {this.props.allowSelectChart ? <SelectChartType state={state} /> : ''}
            <TitleOptions state={state} />
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
