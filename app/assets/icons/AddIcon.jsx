import React from 'react';

const AddIcon = ({ width, height, color }) => (
  <svg
    width={width || '20'}
    height={height || '20'}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5714 8.57143H11.4286V1.42857C11.4286 0.64 10.7886 0 10 0C9.21143 0 8.57143 0.64 8.57143 1.42857V8.57143H1.42857C0.64 8.57143 0 9.21143 0 10C0 10.7886 0.64 11.4286 1.42857 11.4286H8.57143V18.5714C8.57143 19.36 9.21143 20 10 20C10.7886 20 11.4286 19.36 11.4286 18.5714V11.4286H18.5714C19.36 11.4286 20 10.7886 20 10C20 9.21143 19.36 8.57143 18.5714 8.57143Z"
      fill={color || '#007AFF'}
    />
  </svg>
);

export default AddIcon;
