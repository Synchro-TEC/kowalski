import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';

const Series = props => {
  return (
    <Area>
      <AreaTitle>Series</AreaTitle>
      <div className="sv-form sv-pa--15 sv-bg-color--white-1">
        <ul className="sv-ol">
          {props.store.chart.series.map((serie, i) => (
            <li key={`serie-${i}`}>
              <a onClick={() => props.store.removeSerie(i)}>[&times;]</a> {'  '}
              {serie.name}
            </li>
          ))}
        </ul>
      </div>
    </Area>
  );
};

Series.propTypes = {
  store: PropTypes.object,
};
export default view(Series);
