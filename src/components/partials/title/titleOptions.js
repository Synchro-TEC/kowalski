import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Values from '../../../echarts-props/options/values';
import ColorPicker from '../../ui/colorPicker';
import Switcher from '../../ui/switcher';

const TitleOptions = props => {
  const setTextColor = color => {
    props.store.setValue('chart.title.textStyle.color', color);
  };

  const setSubtextColor = color => {
    props.store.setValue('chart.title.subtextStyle.color', color);
  };

  const setTitlePosition = value => {
    props.store.setValue('chart.title.left', value);
  };

  return (
    <div className="sv-form sv-pa--10" style={{ borderBottom: '1px solid #ccc' }}>
      <label>
        Titulo:{' '}
        <input
          type="text"
          value={props.store.chart.title.text}
          onChange={e => props.store.setValue('chart.title.text', e.target.value)}
        />
        <ColorPicker color={props.store.chart.title.textStyle.color} handleChange={setTextColor} />
      </label>
      <div>
        Subtitulo:{' '}
        <input
          type="text"
          value={props.store.chart.title.subtext}
          onChange={e => props.store.setValue('chart.title.subtext', e.target.value)}
        />
        <ColorPicker color={props.store.chart.title.subtextStyle.color} handleChange={setSubtextColor} />
      </div>
      <div className="sv-pa--5">
        <Switcher
          fields={Values.align}
          title="Posição"
          currentValue={props.store.chart.title.left}
          changeHandler={setTitlePosition}
        />
      </div>
    </div>
  );
};

TitleOptions.propTypes = {
  store: PropTypes.object,
};

export default view(TitleOptions);
