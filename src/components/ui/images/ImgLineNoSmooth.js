import React from 'react';
import PropTypes from 'prop-types';

const ImgLineNoSmooth = props => {
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
        <clipPath id="_clipPath_mn8TD2IGHJhFCYyuk9D39yQgr5Z0Hxb3">
          <rect width="36" height="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_mn8TD2IGHJhFCYyuk9D39yQgr5Z0Hxb3)">
        <line
          x1="3.5"
          y1="9"
          x2="30.5"
          y2="9"
          vectorEffect="non-scaling-stroke"
          strokeWidth="2"
          stroke={props.color}
          strokeLinejoin="miter"
          strokeLinecap="square"
          strokeMiterlimit="3"
        />
        <path
          d=" M 2 9 C 2 7.344 3.344 6 5 6 C 6.656 6 8 7.344 8 9 C 8 10.656 6.656 12 5 12 C 3.344 12 2 10.656 2 9 Z "
          fill={props.color}
        />
        <path
          d=" M 28 9 C 28 7.344 29.344 6 31 6 C 32.656 6 34 7.344 34 9 C 34 10.656 32.656 12 31 12 C 29.344 12 28 10.656 28 9 Z "
          fill={props.color}
        />
      </g>
    </svg>
  );
};

ImgLineNoSmooth.defaultProps = {
  color: 'rgb(0,0,0)',
};

ImgLineNoSmooth.propTypes = {
  color: PropTypes.string,
};

export default ImgLineNoSmooth;
