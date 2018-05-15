import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Switcher from '../../../../ui/switcher';
import ImgLineNoSmooth from '../../../../ui/images/ImgLineNoSmooth';
import ImgLineSmooth from '../../../../ui/images/ImgLineSmooth';
import ColorPicker from '../../../../ui/colorPicker';

const AreaOption = props => {
  const { index, serie, store } = props;

  const changeLineType = type => {
    store.updateSerieProp(index, 'smooth', type === 'suave');
  };

  const changeAreaColor = color => {
    store.updateSerieProp(index, 'itemStyle.color', color);
  };

  const changeLineWidth = e => {
    store.updateSerieProp(index, 'lineStyle.width', parseInt(e.target.value, 10));
  };

  const lineType = serie.smooth ? 'suave' : 'reta';
  const imgNoSmoothColor = !serie.smooth ? 'rgb(88, 112, 146)' : 'rgb(150,150,150)';
  const imgSmoothColor = serie.smooth ? 'rgb(88, 112, 146)' : 'rgb(150,150,150)';

  return (
    <div style={{ borderWidth: '1px', borderStyle: 'solid' }} className="sv-bd-color--steel-200 sv-pa--5 sv-mb--5">
      <p className="sv-fw-thin sv-text-center sv-ma--0">Opções da Área</p>
      <div>
        <Switcher
          fields={[
            { label: <ImgLineNoSmooth color={imgNoSmoothColor} />, value: 'reta', hint: 'Conexões Retas' },
            { label: <ImgLineSmooth color={imgSmoothColor} />, value: 'suave', hint: 'Conexões Suaves' },
          ]}
          title="Tipo:"
          currentValue={lineType}
          changeHandler={changeLineType}
        />
      </div>
      <div className="sv-row--with-gutter sv-mb--0">
        <div className="sv-column">
          <label className="sv-mb--0">
            Cor:
            <ColorPicker color={serie.itemStyle.color} handleChange={changeAreaColor} height={21} outerWidth="100%" />
          </label>
        </div>
        <div className="sv-column">
          <label className="sv-mb--0">
            Espessura:
            <input type="number" onChange={changeLineWidth} value={serie.lineStyle.width} step="1" min="1" max="10" />
          </label>
        </div>
      </div>
    </div>
  );
};

AreaOption.propTypes = {
  index: PropTypes.number,
  serie: PropTypes.any,
  store: PropTypes.any,
};

export default view(AreaOption);
