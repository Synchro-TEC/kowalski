import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Area from '../../ui/area';
import AreaTitle from '../../ui/areaTitle';
import Collapsible from 'react-collapsible';
import Switcher from '../../../components/ui/switcher';
import ImgLineNoSmooth from '../../../components/ui/images/ImgLineNoSmooth';
import ImgLineSmooth from '../../../components/ui/images/ImgLineSmooth';

const LineOption = props => {
  const { index, serie, store } = props;
  const lineType = serie.smooth ? 'suave' : 'reta';
  const changeLegendPosition = type => {
    store.updateSerieProp(index, 'smooth', type === 'suave');
  };

  return (
    <div style={{ borderWidth: '1px', borderStyle: 'solid' }} className="sv-bd-color--steel-200 sv-pa--5 sv-mb--5">
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: serie.itemStyle.color,
        }}
      />
      <div>
        <Switcher
          fields={[{ label: <ImgLineNoSmooth />, value: 'reta' }, { label: <ImgLineSmooth />, value: 'suave' }]}
          title="Tipo de Linha"
          currentValue={lineType}
          changeHandler={changeLegendPosition}
        />
      </div>
    </div>
  );
};

LineOption.propTypes = {
  index: PropTypes.number,
  serie: PropTypes.any,
  store: PropTypes.any,
};

const Series = props => {
  return (
    <Area>
      <AreaTitle>Valores</AreaTitle>
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
              easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
            >
              <LineOption serie={serie} store={props.store} index={i} />
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
