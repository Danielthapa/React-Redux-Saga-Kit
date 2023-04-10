import React from 'react';

const RackIcon = ({ width, height, color }) => (
  <svg
    width={width || '20'}
    height={height || '19'}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.0909 0H0.909091C0.667985 0 0.436754 0.095778 0.266267 0.266264C0.0957789 0.43675 0 0.667978 0 0.909082V17.2726C0 17.5137 0.0957789 17.7449 0.266267 17.9154C0.436754 18.0859 0.667985 18.1816 0.909091 18.1816H19.0909C19.332 18.1816 19.5632 18.0859 19.7337 17.9154C19.9042 17.7449 20 17.5137 20 17.2726V0.909082C20 0.667978 19.9042 0.43675 19.7337 0.266264C19.5632 0.095778 19.332 0 19.0909 0ZM1.81818 10.909V7.27266H7.27273C7.27273 7.51376 7.36851 7.74499 7.53899 7.91547C7.70948 8.08596 7.94071 8.18174 8.18182 8.18174H11.8182C12.0593 8.18174 12.2905 8.08596 12.461 7.91547C12.6315 7.74499 12.7273 7.51376 12.7273 7.27266H18.1818V10.909H1.81818ZM1.81818 1.81816H7.27273C7.27273 2.05927 7.36851 2.2905 7.53899 2.46098C7.70948 2.63147 7.94071 2.72725 8.18182 2.72725H11.8182C12.0593 2.72725 12.2905 2.63147 12.461 2.46098C12.6315 2.2905 12.7273 2.05927 12.7273 1.81816H18.1818V5.45449H1.81818V1.81816ZM18.1818 16.3635H1.81818V12.7271H7.27273C7.27273 12.9683 7.36851 13.1995 7.53899 13.37C7.70948 13.5405 7.94071 13.6362 8.18182 13.6362H11.8182C12.0593 13.6362 12.2905 13.5405 12.461 13.37C12.6315 13.1995 12.7273 12.9683 12.7273 12.7271H18.1818V16.3635Z"
      fill={color || '#007AFF'}
    />
  </svg>
);

export default RackIcon;
