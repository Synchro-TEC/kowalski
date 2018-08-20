import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Aside from './components/ui/aside';
import Article from './components/ui/article';
import Styledmain from './components/ui/main';
import Cancan from './components/ui/Cancan';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
// import SelectChartType from './components/partials/chartType/selectChartType';
import TitleOptions from './components/partials/options/title/titleOptions';
import LegendOptions from './components/partials/options/legend/legendOptions';
import ChartAreaOptions from './components/partials/options/chartArea/chartAreaOptions';
import Store from './store/mainStore';
import Series from './components/partials/series/series';
import SeriePie from './components/partials/series/seriePie';
import AxisX from './components/partials/axisX/axisX';
import AxisY from './components/partials/axisY/axisY';
import RadiusOptions from './components/partials/options/radius/radiusOptions';

// import DataView from './components/partials/data/dataView.js';
import ColumnSelector from './components/partials/columnSelector/columnSelector';
import XOptions from './components/partials/options/x/xOptions.js';
import YOptions from './components/partials/options/y/yOptions.js';

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

const Maincontainer = styled.div`
  height: 100%;
  width: 100%;
  font-size: 12px !important;
  //display: box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
`;

const ChartBox = styled.div`
  border: 1px solid #dcdcdc;
  box-shadow: 0 4px 8px -3px rgba(17, 17, 17, 0.1);
  background: #fff;
  margin-bottom: 13px;
  position: sticky;
`;

const ButtonsBox = styled.div`
  border: 1px solid #dcdcdc;
  box-shadow: 0 4px 8px -3px rgba(17, 17, 17, 0.1);
  background: #fff;
  height: 40px;
  padding: 5px;
  position: sticky;
`;

class Kowalski extends Component {
  constructor(props) {
    super(props);

    this.sizes = {
      articlePaddingTop: 10,
      articlePaddingBottom: 13,
      articleMarginBottom: 13,
      buttonHeight: 40,
      dataView: 308,
    };

    this._fireResize = this._fireResize.bind(this);
  }

  _fireResize() {
    Store.onResize();
  }

  componentDidMount() {
    // Store.setData(this.props.data);
    // Store.setColumns(this.props.schema);
    Store.initialize(this.props.chart);
    window.addEventListener('resize', this._fireResize);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    Store.setData(nextProps.data);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._fireResize);
  }

  _calcChartHeight() {
    const dataViewHeight = this.props.showDataView ? this.sizes.dataView : 0;
    const containerHeight = this.props.containerHeight;
    const calculatedPadding = this.sizes.articlePaddingTop + this.sizes.articlePaddingBottom;
    const calculatedMargins = this.sizes.articleMarginBottom;
    const calculateChartArea =
      containerHeight - calculatedPadding - calculatedMargins - this.sizes.buttonHeight - dataViewHeight;

    return `${calculateChartArea}px`;
  }

  render() {
    let onEvents = {
      click: args => console.log(args),
      legendselectchanged: args => console.log(args),
    };

    const hasChart = !!Object.keys(Store.chart).length;

    return (
      <Maincontainer>
        <Cancan condition={hasChart}>
          <Styledmain>
            {this.props.allowSeriesChange ? (
              <Aside>
                {/*{this.props.allowSelectChart ? <SelectChartType store={Store} /> : ''}*/}
                <Cancan condition={!!Store.selectedPlot && Object.keys(Store.chart).includes('series')}>
                  <AxisX store={Store} />
                  <AxisY store={Store} />
                </Cancan>
                <Cancan condition={Object.keys(Store.chart).includes('series') && !!Store.chart.series.length}>
                  <Cancan condition={Store.chart.ktype !== 'pie'}>
                    <Series store={Store} />
                  </Cancan>
                  <Cancan condition={Store.chart.ktype === 'pie'}>
                    <SeriePie store={Store} />
                  </Cancan>
                </Cancan>
                <Cancan condition={Store.dataReceived}>
                  <ColumnSelector store={Store} />
                </Cancan>
              </Aside>
            ) : (
              ''
            )}

            <Article
              style={{
                padding: `${this.sizes.articlePaddingTop}px 0 ${this.sizes.articlePaddingBottom}px 0`,
                margin: !this.props.allowSeriesChange ? '0 0 0 10px' : '0',
              }}
              allowSeriesChange={this.props.allowSeriesChange}
            >
              {/*<DataView store={Store} />*/}
              <ChartBox>
                <ReactEcharts
                  notMerge={true}
                  option={Store.chart}
                  echarts={echarts}
                  onEvents={onEvents}
                  theme="kowalski"
                  style={{ height: this._calcChartHeight() }}
                />
              </ChartBox>
              <ButtonsBox>
                <div className="sv-row sv-ma--0 sv-pa--0">
                  <div className="sv-column sv-text-right">
                    <button
                      type="button"
                      className="sv-button link link-default small"
                      onClick={() => {
                        this.props.onCancel();
                        Store.onFinish();
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="sv-button info small"
                      onClick={() => {
                        this.props.onFinish(Store.chart);
                        Store.onFinish();
                      }}
                    >
                      Finalizar
                    </button>
                  </div>
                </div>
              </ButtonsBox>
            </Article>
            <Aside>
              <TitleOptions store={Store} />
              <LegendOptions store={Store} />
              <Cancan condition={Store.chart.ktype !== 'pie'}>
                <ChartAreaOptions store={Store} />
                <XOptions store={Store} />
                <YOptions store={Store} />
              </Cancan>
              <Cancan condition={Store.chart.ktype === 'pie'}>
                <RadiusOptions store={Store} />
              </Cancan>
            </Aside>
          </Styledmain>
          <pre style={{ display: 'none' }}>{JSON.stringify(Store.chart, null, 2)}</pre>
          <pre style={{ display: 'none' }}>{JSON.stringify(Store.data, null, 2)}</pre>
          <pre style={{ display: 'none' }}>{JSON.stringify(Store.columns, null, 2)}</pre>
        </Cancan>
      </Maincontainer>
    );
  }
}

const calcHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};

Kowalski.defaultProps = {
  data: [],
  showDataView: false,
  allowSelectData: false,
  allowSeriesChange: false,
  containerHeight: calcHeight(),
  onFinish: opts => console.log(opts),
};

Kowalski.propTypes = {
  data: PropTypes.array,
  appName: PropTypes.string.isRequired,
  allowSelectChart: PropTypes.bool,
  allowSelectData: PropTypes.bool,
  allowSeriesChange: PropTypes.bool,
  chart: PropTypes.object,
  containerHeight: PropTypes.number,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  schema: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string,
      columnLabel: PropTypes.string,
      columnType: PropTypes.oneOf(['varchar', 'numeric', 'timestamp']),
    })
  ),
  showDataView: PropTypes.bool,
};

export default view(Kowalski);
