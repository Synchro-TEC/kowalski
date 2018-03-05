import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Values from '../../../echarts-props/options/values';
import ElementPadding from '../../ui/elementPadding';
import AreaTitle from '../../ui/areaTitle';
import AreaSubTitle from '../../ui/areaSubTitle';
import Switcher from '../../ui/switcher';
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

  const changePadding = values => {
    props.store.setValue('chart.legend.padding', values);
  };

  // props.store.chart.legend.padding.slice();
  return (
    <div style={{ borderBottom: '1px solid #ccc' }}>
      <AreaTitle>Legenda</AreaTitle>
      <AreaSubTitle>Visualização</AreaSubTitle>
      <div className="sv-pb--10">
        <div className="sv-pa--5">
          Tipo da legenda:{' '}
          <Select
            onChange={e => props.store.setValue('chart.legend.type', e.value)}
            options={Values.legend.type}
            value={props.store.chart.legend.type}
            clearable={false}
          />
        </div>
        <div className="sv-pa--5">
          Orientação:{' '}
          <Select
            onChange={e => props.store.setValue('chart.legend.orient', e.value)}
            options={Values.legend.orient}
            value={props.store.chart.legend.orient}
            clearable={false}
          />
        </div>
        <Switcher />
      </div>

      <AreaSubTitle>Alinhamento</AreaSubTitle>
      <div className="sv-pa--5">{positionButtons}</div>

      <AreaSubTitle>Margens</AreaSubTitle>
      <div className="sv-form sv-pa--5">
        <ElementPadding values={props.store.chart.legend.padding} handlerChange={changePadding} />
      </div>
    </div>
  );
};

LegendOptions.propTypes = {
  store: PropTypes.object,
};

export default view(LegendOptions);
