import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import Collapsible from 'react-collapsible';
import PieOption from '../options/series/pie/pieOptions';

const SeriePie = props => {
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
          {props.store.chart.series[0].data.map((data, i) => {
            return (
              <Collapsible
                trigger={
                  <div className="sv-bg-color--steel-100 sv-pointer sv-pa--5 sv-mb--5">
                    {data.name}
                    <i className="fa fa-fw fa-angle-double-down sv-pull-right" style={{ marginTop: '3px' }} />
                  </div>
                }
                triggerWhenOpen={
                  <div className="sv-bg-color--steel-200 sv-pointer sv-pa--5 sv-mb--0">
                    {data.name}
                    <i className="fa fa-fw fa-angle-double-up sv-pull-right" style={{ marginTop: '3px' }} />
                  </div>
                }
                key={`data-${i}`}
                transitionTime={200}
                transitionCloseTime={100}
              >
                <PieOption data={data} store={props.store} index={i} />
              </Collapsible>
            );
          })}
        </div>
      </Collapsible>
    </Area>
  );
};

SeriePie.propTypes = {
  store: PropTypes.object,
};
export default view(SeriePie);
