import React from 'react';

const CheckMarkIcon = ({ width = '16', height = '12', color = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2917 0.789789L14.8591 0.357276C14.3833 -0.119092 13.6044 -0.119092 13.1285 0.357276L5.77546 7.70998L3.16666 5.1018C2.69128 4.62594 1.91191 4.62594 1.43653 5.10231L1.004 5.53432C0.528615 6.01018 0.528615 6.789 1.004 7.26487L4.90788 11.1716C5.38377 11.648 6.16263 11.648 6.63851 11.1716L15.2917 2.52034C15.7661 2.04448 15.7661 1.26565 15.2917 0.789789Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckMarkIcon;
