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

  componentWillReceiveProps(nextProps) {
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
            <Aside>
              {/*{this.props.allowSelectChart ? <SelectChartType store={Store} /> : ''}*/}
              <Cancan condition={!!Store.selectedPlot && Object.keys(Store.chart).includes('series')}>
                <AxisX store={Store} />
                <AxisY store={Store} />
              </Cancan>
              <Cancan condition={Object.keys(Store.chart).includes('series') && !!Store.chart.series.length}>
                <Cancan condition={Store.chart.type !== 'pie'}>
                  <Series store={Store} />
                </Cancan>
                <Cancan condition={Store.chart.type === 'pie'}>
                  <SeriePie store={Store} />
                </Cancan>
              </Cancan>
              <Cancan condition={Store.dataReceived}>
                <ColumnSelector store={Store} />
              </Cancan>
            </Aside>
            <Article
              style={{
                padding: `${this.sizes.articlePaddingTop}px 0 ${this.sizes.articlePaddingBottom}px 0`,
              }}
            >
              {/*<DataView store={Store} />*/}
              <ChartBox>
                <ReactEcharts
                  notMerge={true}
                  option={Store.chart}
                  echarts={echarts}
                  onEvents={onEvents}
                  style={{ height: this._calcChartHeight() }}
                />
              </ChartBox>
              <ButtonsBox>
                <div className="sv-row sv-ma--0 sv-pa--0">
                  <div className="sv-column sv-text-right">
                    <button
                      type="button"
                      className="sv-button info small "
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
              <ChartAreaOptions store={Store} />
              <Cancan condition={Store.chart.type !== 'pie'}>
                <XOptions store={Store} />
                <YOptions store={Store} />
              </Cancan>
              <Cancan condition={Store.chart.type === 'pie'}>
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
  containerHeight: calcHeight(),
  onFinish: opts => console.log(opts),
};

Kowalski.propTypes = {
  data: PropTypes.array,
  appName: PropTypes.string.isRequired,
  allowSelectChart: PropTypes.bool,
  allowSelectData: PropTypes.bool,
  chart: PropTypes.object,
  containerHeight: PropTypes.number,
  onFinish: PropTypes.func,
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
