import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { store, view } from 'react-easy-state';

let state = store({
  charts: ['A', 'B', 'C'],
  selectedChart: null,
});

class Kowalski extends Component {
  constructor(props) {
    super(props);
  }

  changeSelected = ev => {
    state.selectedChart = ev.target.value;
  };

  render() {
    const buttons = state.charts.map(chart => (
      <button onClick={this.changeSelected} value={chart} key={`chart-${chart}`}>
        {chart}
      </button>
    ));

    return (
      <div>
        <h2>{this.props.appName}</h2>
        <h3>Selected Chart: {state.selectedChart}</h3>
        <hr />
        {buttons}
      </div>
    );
  }
}

Kowalski.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default view(Kowalski);
