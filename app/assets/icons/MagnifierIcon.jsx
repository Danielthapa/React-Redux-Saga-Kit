import React from 'react';

const MagnifierIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '23'}
      height={height || '23'}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_670_3957)">
        <path
          d="M14.6362 12.25L11.6362 9.25C12.1987 8.375 12.5112 7.375 12.5112 6.25C12.5112 3.125 10.0112 0.625 6.88623 0.625C3.76123 0.625 1.26123 3.125 1.26123 6.25C1.26123 9.375 3.76123 11.875 6.88623 11.875C8.01123 11.875 9.01123 11.5625 9.88623 11L12.8862 14C13.1362 14.25 13.4487 14.375 13.7612 14.375C14.4487 14.375 15.0112 13.8125 15.0112 13.125C15.0112 12.75 14.8862 12.4375 14.6362 12.25ZM3.76123 6.25C3.76123 4.5 5.13623 3.125 6.88623 3.125C8.63623 3.125 10.0112 4.5 10.0112 6.25C10.0112 8 8.63623 9.375 6.88623 9.375C5.13623 9.375 3.76123 8 3.76123 6.25Z"
          fill={color || '#AEAEB2'}
        />
      </g>
      <defs>
        <clipPath id="clip0_670_3957">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.63623)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MagnifierIcon;
