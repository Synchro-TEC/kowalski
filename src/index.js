import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Aside from './components/ui/aside';
import Article from './components/ui/article';
import Styledmain from './components/ui/main';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import SelectChartType from './components/partials/chartType/selectChartType';
import TitleOptions from './components/partials/title/titleOptions';
import LegendOptions from './components/partials/legend/legendOptions';
import GridOptions from './components/partials/grid/gridOptions';
import Store from './store/mainStore';
import Series from './components/partials/series/series';

const Maincontainer = styled.div`
  height: 100%;
  width: 100%;
  font-size: 12px !important;
  display: box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

const ChartBox = styled.div`
  border: 1px solid #dcdcdc;
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.1);
  background: #fff;
  margin-bottom: 13px;
`;

const ButtonsBox = styled.div`
  border: 1px solid #dcdcdc;
  box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.1);
  background: #fff;
  height: 40px;
`;

class Kowalski extends Component {
  constructor(props) {
    super(props);

    this.sizes = {
      articlePaddingTop: 10,
      articlePaddingBottom: 13,
      articleMarginBottom: 13,
      buttonHeight: 40,
    };

    this._fireResize = this._fireResize.bind(this);
  }

  _fireResize() {
    Store.onResize();
  }

  componentDidMount() {
    Store.setData(this.props.data);
    window.addEventListener('resize', this._fireResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._fireResize);
  }

  _calcChartHeight() {
    const bodyHeight = document.body.offsetHeight;
    const calculatedPadding = this.sizes.articlePaddingTop + this.sizes.articlePaddingBottom;
    const calculatedMargins = this.sizes.articleMarginBottom;
    const calculateChartArea = bodyHeight - calculatedPadding - calculatedMargins - this.sizes.buttonHeight;

    return `${calculateChartArea}px`;
  }

  render() {
    let onEvents = {
      click: args => console.log(args),
      legendselectchanged: args => console.log(args),
    };

    return (
      <Maincontainer>
        <Styledmain>
          <Aside>
            {this.props.allowSelectChart ? <SelectChartType store={Store} /> : ''}
            {/*<GridOptions state={Store} />
    <Series store={Store} />*/}
          </Aside>
          <Article style={{ padding: `${this.sizes.articlePaddingTop}px 0 ${this.sizes.articlePaddingBottom}px 0` }}>
            <ChartBox>
              <ReactEcharts
                notMerge={true}
                option={Store.chart}
                echarts={echarts}
                onEvents={onEvents}
                style={{ height: this._calcChartHeight() }}
              />
            </ChartBox>
            <ButtonsBox>Buttons</ButtonsBox>
          </Article>
          <Aside>
            <TitleOptions store={Store} />
            <LegendOptions store={Store} />
          </Aside>
        </Styledmain>
        <pre style={{ display: 'none' }}>{JSON.stringify(Store.chart, null, 2)}</pre>
        <pre style={{ display: 'none' }}>{JSON.stringify(Store.chart.dataset, null, 2)}</pre>
      </Maincontainer>
    );
  }
}

Kowalski.propTypes = {
  data: PropTypes.array,
  appName: PropTypes.string.isRequired,
  allowSelectChart: PropTypes.bool,
  allowSelectData: PropTypes.bool,
};

export default view(Kowalski);
