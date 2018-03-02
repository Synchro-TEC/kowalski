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
const Legend = props => {
  return (
    <div className="sv-form sv-pa--10" style={{ borderBottom: '1px solid #ccc' }}>
      <p>
        Tipo da legenda: <Select onChange={this.handleChange} options={Values.legend.type} />
      </p>
      <p>
        Orientação: <Select onChange={this.handleChange} options={Values.legend.orient} />
      </p>
      <p>
        Superior:{' '}
        <input
          type="text"
          value={props.state.chart.legend.bottom}
          onChange={e => props.state.setValue('chart.legend.bottom', e.target.value)}
        />
      </p>
      <p>
        Inferior:{' '}
        <input
          type="text"
          value={props.state.chart.legend.bottom}
          onChange={e => props.state.setValue('chart.legend.bottom', e.target.value)}
        />
      </p>
      <p>
        Esquesda:{' '}
        <input
          type="text"
          value={props.state.chart.legend.left}
          onChange={e => props.state.setValue('chart.legend.left', e.target.value)}
        />
      </p>
      <p>
        Direita:{' '}
        <input
          type="text"
          value={props.state.chart.legend.right}
          onChange={e => props.state.setValue('chart.legend.right', e.target.value)}
        />
      </p>
    </div>
  );
};

Legend.propTypes = {
  state: PropTypes.object,
};

export default view(Legend);
