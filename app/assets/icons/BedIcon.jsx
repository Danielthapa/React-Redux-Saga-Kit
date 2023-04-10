import React from 'react';

const BedIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_302_7828)">
        <path d="M18.387 10.29H1.61279V16.7417H18.387V10.29Z" fill="black" />
        <path
          d="M18.3872 17.3868V10.29"
          stroke={color || 'black'}
          stroke-width="1.29032"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M1.61279 17.3868V10.29"
          stroke={color || 'black'}
          stroke-width="1.29032"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M16.4518 3.19336H3.54862C2.83572 3.19336 2.2583 3.77078 2.2583 4.48368V8.99981H3.54862V7.70949C3.54862 7.35336 3.83766 7.06433 4.19378 7.06433H8.70991C9.06604 7.06433 9.35507 7.35336 9.35507 7.70949V8.99981H10.6454V7.70949C10.6454 7.35336 10.9344 7.06433 11.2906 7.06433H15.8067C16.1628 7.06433 16.4518 7.35336 16.4518 7.70949V8.99981H17.7422V4.48368C17.7422 3.77078 17.1648 3.19336 16.4518 3.19336Z"
          stroke={color || 'black'}
        />
      </g>
      <defs>
        <clipPath id="clip0_302_7828">
          <rect
            width="19.3548"
            height="19.3548"
            fill="white"
            transform="translate(0.322754 0.613281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BedIcon;
