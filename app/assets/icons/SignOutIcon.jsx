import React from 'react';

const SignOutIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || "15"}
      height={height || "16"}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1953 5.63867L12.6562 8.09961L10.1953 10.5605"
        stroke={color || "#FF3B30"}
        stroke-width="1.40625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.09375 8.09961H12.6562"
        stroke={color || "#FF3B30"}
        stroke-width="1.40625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.09375 13.2559H2.8125C2.68818 13.2559 2.56895 13.2065 2.48104 13.1186C2.39314 13.0307 2.34375 12.9114 2.34375 12.7871V3.41211C2.34375 3.28779 2.39314 3.16856 2.48104 3.08065C2.56895 2.99275 2.68818 2.94336 2.8125 2.94336H6.09375"
        stroke={color || "#FF3B30"}
        stroke-width="1.40625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SignOutIcon;
