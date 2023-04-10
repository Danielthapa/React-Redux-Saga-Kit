import React from 'react';

const BookingIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '40'}
      height={height || '40'}
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="20"
        cy="19.375"
        rx="20"
        ry="19.375"
        fill={color || '#007AFF'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.1905 26.0655V24.1607H28.0952V26.0655H30V27.9702H28.0952V29.875H26.1905V27.9702H24.2857V26.0655H26.1905ZM11.9048 15.5893H27.1429V12.7321H25.2381V13.6845H23.3333V12.7321H15.7143V13.6845H13.8095V12.7321H11.9048V15.5893ZM11.9048 17.494V27.0179H21.4286V28.9226H11.9048C10.8528 28.9226 10 28.0698 10 27.0179V12.7321C10 11.6802 10.8528 10.8274 11.9048 10.8274H13.8095V9.875H15.7143V10.8274H23.3333V9.875H25.2381V10.8274H27.1429C28.1948 10.8274 29.0476 11.6802 29.0476 12.7321V21.3036H27.1429V17.494H11.9048Z"
        fill="white"
      />
    </svg>
  );
};

export default BookingIcon;
