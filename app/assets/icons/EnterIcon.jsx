import React from 'react';

const EnterIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '26'}
      height={height || '26'}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.74023 2.1124H17.5728V17.9854H5.74023V19.1398H18.7272V0.958008H5.74023V2.1124Z"
        fill={color || '#34C759'}
      />
      <path
        d="M1.69981 9.47266H0.54541V10.6271H1.69981V9.47266Z"
        fill={color || '#34C759'}
      />
      <path
        d="M7.06754 13.9734L7.87562 14.7815L12.6231 10.0485L7.87562 5.31543L7.06754 6.12351L10.4009 9.47126H3.14258V10.6257H10.4009L7.06754 13.9734Z"
        fill={color || '#34C759'}
      />
    </svg>
  );
};

export default EnterIcon;
