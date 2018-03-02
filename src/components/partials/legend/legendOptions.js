import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Values from '../../../echarts-props/options/values';
// type: 'scroll',
//   orient: 'vertical',
//   right: 50,
//   top: 50,
//   bottom: 20,
const LegendOptions = props => {
  const positionButtons = Values.title.left.map((val, i) => (
    <input
      type="radio"
      name="legendPosition"
      key={`tpb=${i}`}
      value={val}
      checked={props.store.chart.legend.left === val}
      onChange={e => props.store.setValue('chart.legend.left', e.target.value)}
    />
  ));

  return (
    <div className="sv-form sv-pa--10" style={{ borderBottom: '1px solid #ccc' }}>
      <div>
        Tipo da legenda:{' '}
        <Select
          onChange={e => props.store.setValue('chart.legend.type', e.value)}
          options={Values.legend.type}
          value={props.store.chart.legend.type}
        />
      </div>
      <div>
        Orientação:{' '}
        <Select
          onChange={e => props.store.setValue('chart.legend.orient', e.value)}
          options={Values.legend.orient}
          value={props.store.chart.legend.orient}
        />
      </div>
      <div>
        Superior:{' '}
        <input
          type="text"
          value={props.store.chart.legend.top}
          onChange={e => props.store.setValue('chart.legend.top', e.target.value)}
        />
      </div>
      <div>
        Inferior:{' '}
        <input
          type="text"
          value={props.store.chart.legend.bottom}
          onChange={e => props.store.setValue('chart.legend.bottom', e.target.value)}
        />
      </div>
      <div>{positionButtons}</div>
    </div>
  );
};

LegendOptions.propTypes = {
  store: PropTypes.object,
};

export default view(LegendOptions);
