import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

const SelectChartType = props => {
  const buttons = props.state.charts.map(chart => (
    <button
      className="sv-button small default"
      onClick={e => props.state.setChartType(e.target.value)}
      value={chart}
      key={`chart-${chart}`}
    >
      {chart}
    </button>
  ));

  return (
    <div style={{ borderBottom: '1px solid #ccc' }} className="sv-pa--10">
      <p>Selected Chart: {props.state.selectedChart}</p>
      {buttons}
    </div>
  );
};

SelectChartType.propTypes = {
  state: PropTypes.object,
};

export default view(SelectChartType);
