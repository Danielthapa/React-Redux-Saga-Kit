import React from 'react';

const NextArrowIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '25'}
      height={height || '26'}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 13C24 19.6647 18.8147 25 12.5 25C6.18533 25 1 19.6647 1 13C1 6.33525 6.18533 1 12.5 1C18.8147 1 24 6.33525 24 13Z"
        fill="white"
        stroke={color || '#E5E5E5'}
        stroke-width="2"
      />
      <path
        d="M5 13.5C5 12.6716 5.67157 12 6.5 12H13V15H6.5C5.67157 15 5 14.3284 5 13.5Z"
        fill={color || '#E5E5E5'}
      />
      <path
        d="M20.9488 13.515L12.9745 19L12.9745 8.02997L20.9488 13.515Z"
        fill={color || '#E5E5E5'}
      />
    </svg>
  );
};

export default NextArrowIcon;
