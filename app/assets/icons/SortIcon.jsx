import React from 'react';

const SortIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '34'}
      height={height || '33'}
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.625 24.75H12.875V22H4.625V24.75ZM4.625 8.25V11H29.375V8.25H4.625ZM4.625 17.875H21.125V15.125H4.625V17.875Z"
        fill={color || '#007AFF'}
      />
    </svg>
  );
};

export default SortIcon;
