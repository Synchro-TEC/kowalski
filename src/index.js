import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Aside from './components/ui/aside';
import Article from './components/ui/article';
import Styledmain from './components/ui/main';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import SelectChartType from './components/partials/SelectChartType';
import TitleOptions from './components/partials/title/titleOptions';
import GridOptions from './components/partials/grid/gridOptions';
import Store from './store/mainStore';

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
    Store.setData(this.props.data);
  }

  render() {
    return (
      <Maincontainer>
        <Styledmain>
          <Aside>
            {this.props.allowSelectChart ? <SelectChartType state={Store} /> : ''}
            <TitleOptions state={Store} />
            <GridOptions state={Store} />
          </Aside>
          <Article>
            <h2>{this.props.appName}</h2>
            <ReactEcharts option={Store.getOptions()} echarts={echarts} />
            <pre>{JSON.stringify(Store.chart, null, 2)}</pre>
          </Article>
          <Aside />
        </Styledmain>
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
