import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';

const AxisY = props => {
  let selectedValue = null;

  const cols = props.store.columns.map((col, i) => (
    <option value={col} key={`col-${i}`}>
      {col}
    </option>
  ));

  const changeSelected = e => {
    selectedValue = e.target.value;
  };

  const addSerie = _ => {
    if (selectedValue) {
      props.store.addSerie(selectedValue);
      document.getElementById('columns').options[0].selected = true;
    }
  };

  return (
    <Area>
      <AreaTitle>Adicionar Séries</AreaTitle>
      <div className="sv-form sv-pa--15 sv-bg-color--white-1">
        <label>
          <select onChange={e => changeSelected(e)} id="columns">
            <option value="">Escolha</option>
            {cols}
          </select>
        </label>
        <button className="sv-button info small full" type="button" onClick={addSerie}>
          Adicionar
        </button>
      </div>
    </Area>
  );
};

AxisY.propTypes = {
  store: PropTypes.object,
};
export default view(AxisY);
