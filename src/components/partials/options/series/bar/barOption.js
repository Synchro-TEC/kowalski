import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Switcher from '../../../../ui/switcher';
import ColorPicker from '../../../../ui/colorPicker';
import Values from '../../../../../echarts-props/options/values';
import ImgAlignBase from '../../../../ui/images/ImgAlignBase';
import ImgAlignMed from '../../../../ui/images/ImgAlignMed';
import ImgAlignTop from '../../../../ui/images/ImgAlignTop';
import ImgAlignOut from '../../../../ui/images/ImgAlignOut';
import ImgAlignHCenter from '../../../../ui/images/ImgAlignHCenter';
import ImgAlignHLeft from '../../../../ui/images/ImgAlignHLeft';
import ImgAlignHRight from '../../../../ui/images/ImgAlignHRight';

const BarOption = props => {
  const { index, serie, store } = props;

  const changeBarColor = color => store.updateSerieProp(index, 'itemStyle.color', color);
  const changeBarWidth = e => store.updateSerieProp(index, 'barWidth', `${parseInt(e.target.value, 10)}%`);
  // const changeBarHeiht = e => store.updateSerieProp(index, 'barCategoryGap', `${parseInt(e.target.value, 10)}%`);
  const changeLabelPosition = value => store.updateSerieProp(index, 'label.position', value);

  const changeLabelShow = value => {
    const val = value === 'true';
    store.updateSerieProp(index, 'label.show', val);
  };

  let alignFields;
  let espressura;
  if (store.chart.ktype === 'hstack') {
    alignFields = [
      { label: <ImgAlignHLeft />, value: 'insideLeft', hint: 'Esquerdo' },
      { label: <ImgAlignHCenter />, value: 'inside', hint: 'Centro' },
      { label: <ImgAlignHRight />, value: 'insideRight', hint: 'Direita' },
    ];
    espressura = '';
    // espressura = (
    //   <label className="sv-mb--0">
    //     Altura:
    //     <input
    //       type="number"
    //       onChange={changeBarHeiht}
    //       value={serie.barCategoryGap.replace('%', '')}
    //       step="5"
    //       min="10"
    //       max="99"
    //     />
    //   </label>
    // );
  } else {
    alignFields = [
      { label: <ImgAlignTop />, value: 'insideTop', hint: 'Topo Interno' },
      { label: <ImgAlignMed />, value: 'inside', hint: 'Meio Interno' },
      { label: <ImgAlignBase />, value: 'insideBottom', hint: 'Base Interna' },
      { label: <ImgAlignOut />, value: 'top', hint: 'Topo Externo' },
    ];

    espressura = (
      <label className="sv-mb--0">
        Largura em %:
        <input
          type="number"
          onChange={changeBarWidth}
          value={serie.barWidth.replace('%', '')}
          step="5"
          min="10"
          max="99"
        />
      </label>
    );
  }

  return (
    <div style={{ borderWidth: '1px', borderStyle: 'solid' }} className="sv-bd-color--steel-200 sv-pa--5 sv-mb--5">
      <p className="sv-fw-thin sv-text-center sv-ma--0">Opções da Barra</p>
      <div>
        <Switcher
          fields={Values.choice}
          title="Exibir Label:"
          currentValue={serie.label.show}
          changeHandler={changeLabelShow}
        />
        <Switcher
          fields={alignFields}
          title="Posição do Label:"
          currentValue={serie.label.position}
          changeHandler={changeLabelPosition}
        />
      </div>
      <div className="sv-row--with-gutter sv-mb--0">
        <div className="sv-column">
          <label className="sv-mb--0">
            Cor:
            <ColorPicker color={serie.itemStyle.color} handleChange={changeBarColor} height={21} outerWidth="100%" />
          </label>
        </div>
        <div className="sv-column">{espressura}</div>
      </div>
    </div>
  );
};

BarOption.propTypes = {
  index: PropTypes.number,
  serie: PropTypes.any,
  store: PropTypes.any,
};

export default view(BarOption);
