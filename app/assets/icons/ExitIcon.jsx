import React from 'react';

const ExitIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '18'}
      height={height || '19'}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9869 17.3486H1.15439V1.47569H12.9869V0.321289H0V18.503H12.9869V17.3486Z"
        fill={color || '#FF3B30'}
      />
      <path
        d="M6.78232 8.83594H5.62793V9.99033H6.78232V8.83594Z"
        fill={color || '#FF3B30'}
      />
      <path
        d="M12.9586 14.1438L17.706 9.41076L12.9586 4.67773L12.1505 5.48581L15.4838 8.83356H8.22559V9.98796H15.4838L12.1505 13.3357L12.9586 14.1438Z"
        fill={color || '#FF3B30'}
      />
    </svg>
  );
};

export default ExitIcon;
