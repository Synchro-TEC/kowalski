import React from 'react';
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
    <div>
      <p>Selected Chart: {props.state.selectedChart}</p>
      {buttons}
    </div>
  );
};

export default view(SelectChartType);
