import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import ColorPicker from '../../../../ui/colorPicker';

const PieOption = props => {
  const { index, data, store } = props;

  const changePieColor = color => {
    store.updateSeriePieProp(`data[${index}].itemStyle.color`, color);
  };

  return (
    <div style={{ borderWidth: '1px', borderStyle: 'solid' }} className="sv-bd-color--steel-200 sv-pa--5 sv-mb--5">
      <p className="sv-fw-thin sv-text-center sv-ma--0">Opções da Fatia</p>
      <div className="sv-row--with-gutter sv-mb--0">
        <div className="sv-column">
          <label className="sv-mb--0">
            Cor:
            <ColorPicker color={data.itemStyle.color} handleChange={changePieColor} height={21} outerWidth="100%" />
          </label>
        </div>
      </div>
    </div>
  );
};

PieOption.propTypes = {
  index: PropTypes.number,
  data: PropTypes.any,
  store: PropTypes.any,
};

export default view(PieOption);
