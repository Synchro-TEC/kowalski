import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';

const AxisX = props => {
  const cols = props.store.columns.map((col, i) => (
    <option value={col} key={`col-${i}`}>
      {col}
    </option>
  ));

  return (
    <Area>
      <AreaTitle>Eixo X</AreaTitle>
      <div className="sv-form sv-pa--15 sv-bg-color--white-1">
        <label>
          <span>Coluna mapeada no eixo X</span>
          <select onChange={e => props.store.setAxisX(e.target.value)} value={props.store.chart.dataset.dimensions[0]}>
            <option value="">Escolha</option>
            {cols}
          </select>
        </label>
      </div>
    </Area>
  );
};

AxisX.propTypes = {
  store: PropTypes.object,
};
export default view(AxisX);
