import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
// import DropDown from '../../ui/dropdown';

const ColumnSelector = props => {
  const toggleProjection = (e, col) => {
    props.store.setProjection(col);
  };

  return (
    <Area>
      <AreaTitle>Projetar Colunas</AreaTitle>
      <div className="sv-form sv-pa--15 sv-bg-color--white-1">
        <ul>
          {props.store.columns.map((col, i) => (
            <li key={`col-${i}`}>
              <input type="checkbox" onChange={e => toggleProjection(e, col)} /> {col.columnName}
            </li>
          ))}
        </ul>
      </div>
    </Area>
  );
};

ColumnSelector.propTypes = {
  store: PropTypes.object,
};
export default view(ColumnSelector);
