import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import Collapsible from 'react-collapsible';
import LineOption from '../options/series/line/lineOption';
import BarOption from '../options/series/bar/barOption';
import AreaOption from '../options/series/area/areaOption';

const Series = props => {
  debugger;
  return (
    <Area>
      <Collapsible
        trigger={
          <AreaTitle>
            Valores
            <i className="fa fa-fw fa-angle-double-down sv-pull-right" />
          </AreaTitle>
        }
        triggerWhenOpen={
          <AreaTitle>
            Valores
            <i className="fa fa-fw fa-angle-double-up sv-pull-right" />
          </AreaTitle>
        }
        transitionTime={200}
        transitionCloseTime={100}
        open={true}
      >
        <div className="sv-form sv-pa--15 sv-bg-color--white-1">
          {props.store.chart.series.map((serie, i) => {
            return (
              <Collapsible
                trigger={
                  <div className="sv-bg-color--steel-100 sv-pointer sv-pa--5 sv-mb--5">
                    {serie.name}
                    <i className="fa fa-fw fa-angle-double-down sv-pull-right" style={{ marginTop: '3px' }} />
                  </div>
                }
                triggerWhenOpen={
                  <div className="sv-bg-color--steel-200 sv-pointer sv-pa--5 sv-mb--0">
                    {serie.name}
                    <i className="fa fa-fw fa-angle-double-up sv-pull-right" style={{ marginTop: '3px' }} />
                  </div>
                }
                key={`serie-${i}`}
                transitionTime={200}
                transitionCloseTime={100}
              >
                {serie.type === 'line' && props.store.chart.ktype === 'line' ? (
                  <LineOption serie={serie} store={props.store} index={i} />
                ) : (
                  <AreaOption serie={serie} store={props.store} index={i} />
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
