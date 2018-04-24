import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import Collapsible from 'react-collapsible';

const Series = props => {
  return (
    <Area>
      <AreaTitle>Valores</AreaTitle>
      <div className="sv-form sv-pa--15 sv-bg-color--white-1">
        {props.store.chart.series.map((serie, i) => {
          debugger;
          return (
            <Collapsible
              trigger={serie.name}
              key={`serie-${i}`}
              transitionTime={200}
              easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: serie.itemStyle.color,
                }}
              />
              <div>{serie.smooth ? 'suave' : 'retas'}</div>
            </Collapsible>
          );
        })}
      </div>
    </Area>
  );
};

Series.propTypes = {
  store: PropTypes.object,
};
export default view(Series);
