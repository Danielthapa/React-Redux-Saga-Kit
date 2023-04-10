import React from 'react';

const CreateShortcut = ({ width, height, color }) => {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10H18V18H10V22H18V30H22V22H30V18H22V10ZM20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36Z"
        fill={color || '#6E6E73'}
      />
    </svg>
  );
};

export default CreateShortcut;
