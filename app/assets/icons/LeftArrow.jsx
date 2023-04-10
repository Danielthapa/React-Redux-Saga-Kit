import React from 'react';

const LeftArrow = ({ width = '7', height = '8', color = '#007AFF' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.75"
        x2="5.95036"
        y2="-0.75"
        transform="matrix(-0.746902 0.664934 -0.746902 -0.664934 5.22217 0.222656)"
        stroke={color}
        stroke-width="1.5"
      />
      <line
        y1="-0.75"
        x2="6.00837"
        y2="-0.75"
        transform="matrix(0.739709 0.672927 -0.754028 0.656841 0.777832 4.17969)"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default LeftArrow;
