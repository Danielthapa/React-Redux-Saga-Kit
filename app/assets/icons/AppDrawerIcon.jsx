import React from 'react';

const AppDrawerIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '25'}
      height={height || '18'}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_416_3635)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 4.5H4.75V0H0V4.5ZM7.125 18H11.875V13.5H7.125V18ZM0 18H4.75V13.5H0V18ZM0 11.25H4.75V6.75H0V11.25ZM7.125 11.25H11.875V6.75H7.125V11.25ZM14.25 0V4.5H19V0H14.25ZM7.125 4.5H11.875V0H7.125V4.5ZM14.25 11.25H19V6.75H14.25V11.25ZM14.25 18H19V13.5H14.25V18Z"
          fill={color || '#6E6E73'}
        />
      </g>
      <defs>
        <clipPath id="clip0_416_3635">
          <rect width="19" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AppDrawerIcon;
