import React from 'react';

const ToggleSidebar = ({ width, height, color }) => (
  <svg
    width={width || '28'}
    height={height || '24'}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.75 21H6.25C4.86929 21 3.75 20.1046 3.75 19V5C3.75 3.89543 4.86929 3 6.25 3H23.75C25.1307 3 26.25 3.89543 26.25 5V19C26.25 20.1046 25.1307 21 23.75 21Z"
      stroke={color || '#007AFF'}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.0625 10L6.875 12L9.0625 14"
      stroke={color || '#007AFF'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.875 21V3"
      stroke={color || '#007AFF'}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ToggleSidebar;
