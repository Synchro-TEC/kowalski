import React from 'react';
import PropTypes from 'prop-types';

const Series = props => {
  const cols = props.store.columns.map((col, i) => (
    <option value={col} key={`col-${i}`}>
      {col}
    </option>
  ));

  return (
    <div>
      <select>{cols}</select>
    </div>
  );
};

Series.propTypes = {
  store: PropTypes.object,
};
export default Series;
