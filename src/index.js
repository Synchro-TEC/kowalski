import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { store, view } from 'react-easy-state';
import styled from 'styled-components';
import Aside from './components/ui/aside';
import Article from './components/ui/article';
import Styledmain from './components/ui/main';

import SelectChartType from './components/partials/SelectChartType';

let state = store({
  charts: ['A', 'B', 'C'],
  selectedChart: null,
  setChartType: type => {
    debugger;
    state.selectedChart = type;
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
          <Aside>{this.props.allowSelectChart ? <SelectChartType state={state} /> : ''}</Aside>
          <Article>
            <h2>{this.props.appName}</h2>
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
