import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import Collapsible from 'react-collapsible';
import PieOption from '../options/series/pie/pieOptions';
import compnentsUtils from '../../../utils/componentsUtils';
import Title from '../../../constants/titles';

const SeriePie = props => {
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
          {props.store.chart.series[0].data.map((data, i) => {
            return (
              <Collapsible
                trigger={compnentsUtils.generateInnerColapsableTitle(data.name, 'closed')}
                triggerWhenOpen={compnentsUtils.generateInnerColapsableTitle(data.name, 'openned')}
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
