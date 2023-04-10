import React from 'react';

const RightArrow = ({ width, height, color }) => (
  <svg
    width={width || '7'}
    height={height || '8'}
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1="-0.75"
      x2="5.95036"
      y2="-0.75"
      transform="matrix(0.746902 -0.664934 0.746902 0.664934 2 8)"
      stroke={color || '#636366'}
      strokeWidth="1.5"
    />
    <line
      y1="-0.75"
      x2="6.00837"
      y2="-0.75"
      transform="matrix(-0.739709 -0.672927 0.754028 -0.656841 6.44449 4.04297)"
      stroke={color || '#636366'}
      strokeWidth="1.5"
    />
  </svg>
);

export default RightArrow;
