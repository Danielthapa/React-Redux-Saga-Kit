import React from 'react';

const ConfirmationCheckMarkIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '200'}
      height={height || '200'}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M183.333 100C183.333 145.833 145.833 183.333 100 183.333C54.1668 183.333 16.6667 145.833 16.6667 100C16.6667 54.1668 54.1668 16.6667 100 16.6667C145.833 16.6667 183.333 54.1668 183.333 100Z"
        fill="#C8E6C9"
      />
      <path
        d="M58.3333 100L87.4999 129.167L150 66.6667"
        stroke="#4CAF50"
        stroke-width="16.6667"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default ConfirmationCheckMarkIcon;
