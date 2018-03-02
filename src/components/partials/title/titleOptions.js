import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Values from '../../../echarts-props/options/values';
import ColorPicker from '../../ui/colorPicker';

const TitleOptions = props => {
  const positionButtons = Values.title.left.map((val, i) => (
    <input
      type="radio"
      name="titlePosition"
      key={`tpb=${i}`}
      value={val}
      checked={props.state.chart.title.left === val}
      onChange={e => props.state.setValue('chart.title.left', e.target.value)}
    />
  ));

  const setTextColor = color => {
    props.state.setValue('chart.title.textStyle.color', color);
  };

  const setSubtextColor = color => {
    props.state.setValue('chart.title.subtextStyle.color', color);
  };

  return (
    <div className="sv-form sv-pa--10" style={{ borderBottom: '1px solid #ccc' }}>
      <label>
        Titulo:{' '}
        <input
          type="text"
          value={props.state.chart.title.text}
          onChange={e => props.state.setValue('chart.title.text', e.target.value)}
        />
        <ColorPicker color={props.state.chart.title.textStyle.color} handleChange={setTextColor} />
      </label>
      <p>
        Subtitulo:{' '}
        <input
          type="text"
          value={props.state.chart.title.subtext}
          onChange={e => props.state.setValue('chart.title.subtext', e.target.value)}
        />
        <ColorPicker color={props.state.chart.title.subtextStyle.color} handleChange={setSubtextColor} />
      </p>
      <p>Position</p>
      <p>{positionButtons}</p>
    </div>
  );
};

TitleOptions.propTypes = {
  state: PropTypes.object,
};

export default view(TitleOptions);
