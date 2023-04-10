import React from 'react';

const AdultGroupIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '32'}
      height={height || '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18C18.7614 18 21 15.7614 21 13C21 10.2386 18.7614 8 16 8C13.2386 8 11 10.2386 11 13C11 15.7614 13.2386 18 16 18Z"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 28C23 26.1435 22.2625 24.363 20.9497 23.0503C19.637 21.7375 17.8565 21 16 21C14.1435 21 12.363 21.7375 11.0503 23.0503C9.7375 24.363 9 26.1435 9 28H23Z"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 14C24.8523 14 25.6904 13.7821 26.4348 13.3671C27.1792 12.9521 27.8052 12.3537 28.2533 11.6287C28.7013 10.9037 28.9566 10.0762 28.9949 9.22474C29.0333 8.37332 28.8533 7.52624 28.4721 6.76393C28.091 6.00163 27.5213 5.34941 26.8172 4.8692C26.1131 4.38899 25.2979 4.09674 24.449 4.0202C23.6002 3.94367 22.7459 4.08537 21.9672 4.43188C21.1885 4.77838 20.5114 5.31817 20 6"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 24H31C31 22.1435 30.2625 20.363 28.9497 19.0503C27.637 17.7375 25.8565 17 24 17"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 6C11.4886 5.31817 10.8115 4.77838 10.0328 4.43188C9.25413 4.08537 8.39981 3.94367 7.55097 4.0202C6.70213 4.09674 5.88695 4.38899 5.18283 4.8692C4.4787 5.34941 3.90902 6.00163 3.52786 6.76393C3.14671 7.52624 2.96675 8.37332 3.00505 9.22474C3.04336 10.0762 3.29867 10.9037 3.74675 11.6287C4.19482 12.3537 4.82078 12.9521 5.56518 13.3671C6.30958 13.7821 7.14772 14 8 14"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 17C6.14348 17 4.36301 17.7375 3.05025 19.0503C1.7375 20.363 1 22.1435 1 24H7"
        stroke={color || '#007AFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AdultGroupIcon;
