import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

const SelectChartType = props => {
  const buttons = props.store.charts.map(chart => (
    <button
      className="sv-button small default"
      onClick={e => props.store.setChartType(e.target.value)}
      value={chart}
      key={`chart-${chart}`}
    >
      {chart}
    </button>
  ));

  return (
    <div style={{ borderBottom: '1px solid #ccc' }} className="sv-pa--10">
      <p>Selected Chart: {props.store.selectedChart}</p>
      {buttons}
    </div>
  );
};

SelectChartType.propTypes = {
  store: PropTypes.object,
};

export default view(SelectChartType);
