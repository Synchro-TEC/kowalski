import React from 'react';
import PropTypes from 'prop-types';

const ImgLineSmooth = props => {
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
        <clipPath id="_clipPath_eVN2umWFeZoTPR4zyhPhQNPkOT991spU">
          <rect width="36" height="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_eVN2umWFeZoTPR4zyhPhQNPkOT991spU)">
        <path
          d=" M 5 9 C 17.75 25.313 15.625 -10.125 30.5 10"
          fill="none"
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

ImgLineSmooth.defaultProps = {
  color: 'rgb(0,0,0)',
};

ImgLineSmooth.propTypes = {
  color: PropTypes.string,
};

export default ImgLineSmooth;
