import React from 'react';
import PropTypes from 'prop-types';

const ImgAlignHRight = props => {
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
          x="5"
          y="1"
          width="26"
          height="16"
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
          x1="20"
          y1="9"
          x2="27"
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

ImgAlignHRight.defaultProps = {
  color: 'rgb(0,0,0)',
};

ImgAlignHRight.propTypes = {
  color: PropTypes.string,
};

export default ImgAlignHRight;
