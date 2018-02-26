import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
// import Values from '../../../echarts-props/options/values';

const GridOptions = props => {
  return (
    <div className="sv-form sv-pa--10" style={{ borderBottom: '1px solid #ccc' }}>
      <p>
        Top:{' '}
        <input
          type="text"
          value={props.state.chart.grid.top}
          onChange={e => props.state.setValue('chart.grid.top', e.target.value)}
        />
      </p>
      <p>
        Bottom:{' '}
        <input
          type="text"
          value={props.state.chart.grid.bottom}
          onChange={e => props.state.setValue('chart.grid.bottom', e.target.value)}
        />
      </p>
      <p>
        Left:{' '}
        <input
          type="text"
          value={props.state.chart.grid.left}
          onChange={e => props.state.setValue('chart.grid.left', e.target.value)}
        />
      </p>
      <p>
        Right:{' '}
        <input
          type="text"
          value={props.state.chart.grid.right}
          onChange={e => props.state.setValue('chart.grid.right', e.target.value)}
        />
      </p>
    </div>
  );
};

GridOptions.propTypes = {
  state: PropTypes.object,
};

export default view(GridOptions);
