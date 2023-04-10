import React from 'react';

const CollapseArrowIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '18'}
      height={height || '12'}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.75"
        x2="13.3027"
        y2="-0.75"
        transform="matrix(-0.659472 -0.751729 0.659472 -0.751729 17.7378 10)"
        stroke={color || '#2C2C2E'}
        stroke-width="1.5"
      />
      <line
        y1="-0.75"
        x2="13.4303"
        y2="-0.75"
        transform="matrix(-0.667525 0.744587 -0.651365 -0.758764 8.96484 0)"
        stroke={color || '#2C2C2E'}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default CollapseArrowIcon;
