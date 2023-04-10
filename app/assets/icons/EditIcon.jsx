import React from 'react';

const EditIcon = ({ width = '11', height = '10', color = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.54146V7H2.45854L6.76219 2.69635L5.30365 1.23781L1 5.54146ZM7.88623 1.5723C8.03792 1.42061 8.03792 1.17364 7.88623 1.02195L6.97805 0.113766C6.82637 -0.0379219 6.57939 -0.0379219 6.4277 0.113766L5.71593 0.825531L7.17447 2.28407L7.88623 1.5723Z"
        fill={color}
      />
    </svg>
  );
};

export default EditIcon;
