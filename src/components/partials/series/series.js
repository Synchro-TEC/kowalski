import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import Collapsible from 'react-collapsible';
import LineOption from '../options/series/line/lineOption';
import BarOption from '../options/series/bar/barOption';
import AreaOption from '../options/series/area/areaOption';
import compnentsUtils from '../../../utils/componentsUtils';
import Title from '../../../constants/titles';

const Series = props => {
  return (
    <Area>
      <Collapsible
        trigger={compnentsUtils.generateColapsableTitle(Title.collapsible.series, 'closed')}
        triggerWhenOpen={compnentsUtils.generateColapsableTitle(Title.collapsible.series, 'openned')}
        transitionTime={200}
        transitionCloseTime={100}
        open={true}
      >
        <div className="sv-form sv-pa--15 sv-bg-color--white-1">
          {props.store.chart.series.map((serie, i) => {
            return (
              <Collapsible
                trigger={compnentsUtils.generateInnerColapsableTitle(serie.name, 'closed')}
                triggerWhenOpen={compnentsUtils.generateInnerColapsableTitle(serie.name, 'openned')}
                key={`serie-${i}`}
                transitionTime={200}
                transitionCloseTime={100}
              >
                {serie.type === 'line' ? (
                  props.store.chart.ktype === 'line' ? (
                    <LineOption serie={serie} store={props.store} index={i} />
                  ) : (
                    <AreaOption serie={serie} store={props.store} index={i} />
                  )
                ) : (
                  ''
                )}
                {serie.type === 'bar' ? <BarOption serie={serie} store={props.store} index={i} /> : ''}
              </Collapsible>
            );
          })}
        </div>
      </Collapsible>
    </Area>
  );
};

Series.propTypes = {
  store: PropTypes.object,
};
export default view(Series);
