import React from 'react';

const PhoneIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '15'}
      height={height || '15'}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_670_3801)">
        <path
          d="M9.15154 7.13593V8.27229C9.15197 8.37778 9.13036 8.4822 9.0881 8.57886C9.04584 8.67552 8.98385 8.76229 8.90612 8.8336C8.82838 8.90492 8.73661 8.95922 8.63667 8.99301C8.53674 9.02681 8.43085 9.03936 8.32578 9.02987C7.16019 8.90322 6.04056 8.50492 5.05684 7.86699C4.14163 7.28542 3.36568 6.50948 2.78412 5.59426C2.14396 4.60608 1.74557 3.481 1.62124 2.31017C1.61177 2.20542 1.62422 2.09985 1.65779 2.00018C1.69136 1.90051 1.74532 1.80892 1.81623 1.73124C1.88713 1.65356 1.97344 1.5915 2.06964 1.549C2.16585 1.50651 2.26985 1.48451 2.37503 1.48441H3.51139C3.69522 1.4826 3.87343 1.5477 4.01281 1.66757C4.1522 1.78744 4.24324 1.9539 4.26897 2.13593C4.31693 2.49959 4.40588 2.85666 4.53412 3.20032C4.58508 3.3359 4.59611 3.48324 4.5659 3.6249C4.53569 3.76655 4.4655 3.89657 4.36366 3.99956L3.8826 4.48062C4.42183 5.42894 5.20702 6.21413 6.15533 6.75335L6.63639 6.27229C6.73938 6.17045 6.8694 6.10026 7.01106 6.07005C7.15271 6.03984 7.30006 6.05087 7.43563 6.10184C7.7793 6.23007 8.13637 6.31902 8.50003 6.36699C8.68403 6.39295 8.85207 6.48563 8.9722 6.6274C9.09232 6.76918 9.15615 6.95016 9.15154 7.13593Z"
          stroke={color || '#007AFF'}
          stroke-width="0.757576"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_670_3801">
          <rect
            width="9.09091"
            height="9.09091"
            fill="white"
            transform="translate(0.818359 0.727539)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcon;
