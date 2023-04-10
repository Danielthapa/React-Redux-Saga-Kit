import React from 'react';

const DownArrow = ({ width, height, color }) => (
  <svg
    width={width || '8'}
    height={height || '7'}
    viewBox="0 0 8 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1="-0.75"
      x2="5.95036"
      y2="-0.75"
      transform="matrix(0.664934 0.746902 -0.664934 0.746902 0 2)"
      stroke={color || '#636366'}
      strokeWidth="1.5"
    />
    <line
      y1="-0.75"
      x2="6.00837"
      y2="-0.75"
      transform="matrix(0.672927 -0.739709 0.656841 0.754028 3.95703 6.44452)"
      stroke={color || '#636366'}
      strokeWidth="1.5"
    />
  </svg>
);

export default DownArrow;
