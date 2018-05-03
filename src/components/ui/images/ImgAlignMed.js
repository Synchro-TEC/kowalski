import React from 'react';
import PropTypes from 'prop-types';

const ImgAlignMed = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ isolation: 'isolate' }}
      viewBox="0 0 36 18"
      width="36"
      height="18"
    >
      <defs>
        <clipPath id="_clipPath_NbUAthvawyiIKzI9K7mU7eYVAnpkRFrx">
          <rect width="36" height="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_NbUAthvawyiIKzI9K7mU7eYVAnpkRFrx)">
        <rect
          x="12"
          y="2"
          width="12"
          height="14"
          transform="matrix(1,0,0,1,0,0)"
          fill="rgba(255,255,255, 0)"
          vectorEffect="non-scaling-stroke"
          strokeWidth="1"
          stroke={props.color}
          strokeLinejoin="miter"
          strokeLinecap="square"
          strokeMiterlimit="3"
        />
        <line
          x1="15"
          y1="9"
          x2="21"
          y2="9"
          vectorEffect="non-scaling-stroke"
          strokeWidth="2"
          stroke={props.color}
          strokeLinejoin="miter"
          strokeLinecap="square"
          strokeMiterlimit="3"
        />
      </g>
    </svg>
  );
};

ImgAlignMed.defaultProps = {
  color: 'rgb(0,0,0)',
};

ImgAlignMed.propTypes = {
  color: PropTypes.string,
};

export default ImgAlignMed;
