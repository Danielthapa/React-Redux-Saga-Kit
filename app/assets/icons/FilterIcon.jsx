import React from 'react';

const FilterIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '25'}
      height={height || '21'}
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 1.0498H2L10.4 10.9827V17.8496L14.6 19.9496V10.9827L23 1.0498Z"
        stroke={color || '#007AFF'}
        stroke-width="2.09999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;
