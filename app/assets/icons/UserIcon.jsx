import React from 'react';

const UserIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || '13'}
      height={height || '16'}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8115 8.40395C10.7577 8.35054 10.6939 8.30825 10.6238 8.27949C10.5537 8.25073 10.4786 8.23606 10.4028 8.23633C10.327 8.2366 10.2519 8.25179 10.182 8.28105C10.1121 8.31031 10.0486 8.35305 9.99518 8.40684C9.94177 8.46063 9.89947 8.52441 9.87071 8.59454C9.84195 8.66468 9.82729 8.73979 9.82755 8.81559C9.82782 8.89139 9.84302 8.9664 9.87227 9.03633C9.90153 9.10626 9.94428 9.16974 9.99807 9.22315C10.4862 9.70614 10.8737 10.2812 11.1382 10.9149C11.4026 11.5487 11.5386 12.2286 11.5384 12.9153C11.5384 13.6191 9.51345 14.646 6.34616 14.646C3.17887 14.646 1.15388 13.6191 1.15388 12.9153C1.15296 12.2331 1.28649 11.5575 1.54684 10.9269C1.80719 10.2964 2.18924 9.72329 2.67118 9.24046C2.77863 9.13237 2.83894 8.98615 2.83894 8.83374C2.83894 8.68134 2.77863 8.53512 2.67118 8.42703C2.56308 8.31958 2.41686 8.25927 2.26445 8.25927C2.11203 8.25927 1.96581 8.31958 1.85772 8.42703C1.26644 9.01499 0.797763 9.71448 0.478874 10.4849C0.159985 11.2554 -0.00277332 12.0815 3.57505e-05 12.9153C3.57505e-05 14.7902 3.27117 15.7998 6.34616 15.7998C9.42115 15.7998 12.6923 14.7902 12.6923 12.9153C12.6945 12.0761 12.5293 11.2448 12.2064 10.4702C11.8834 9.69556 11.4092 8.99311 10.8115 8.40395V8.40395Z"
        fill={color || '#007AFF'}
      />
      <path
        d="M6.34606 8.8774C7.14479 8.8774 7.92558 8.64055 8.5897 8.19682C9.25382 7.75308 9.77144 7.12239 10.0771 6.38448C10.3828 5.64658 10.4627 4.83461 10.3069 4.05125C10.1511 3.2679 9.76646 2.54834 9.20167 1.98358C8.63688 1.41881 7.9173 1.0342 7.13392 0.878378C6.35054 0.722559 5.53854 0.802531 4.80062 1.10818C4.06269 1.41383 3.43197 1.93143 2.98822 2.59553C2.54447 3.25962 2.30762 4.04039 2.30762 4.83909C2.30762 5.91011 2.7331 6.93727 3.49045 7.6946C4.24781 8.45193 5.275 8.8774 6.34606 8.8774ZM6.34606 1.95458C6.91658 1.95458 7.47429 2.12376 7.94866 2.44071C8.42303 2.75766 8.79276 3.20816 9.01109 3.73524C9.22942 4.26231 9.28654 4.84229 9.17524 5.40183C9.06393 5.96137 8.7892 6.47534 8.38578 6.87874C7.98236 7.28215 7.46838 7.55687 6.90882 7.66817C6.34926 7.77947 5.76926 7.72235 5.24217 7.50402C4.71508 7.2857 4.26457 6.91599 3.9476 6.44163C3.63064 5.96728 3.46146 5.40959 3.46146 4.83909C3.46146 4.07407 3.76537 3.34039 4.30634 2.79944C4.84731 2.25849 5.58102 1.95458 6.34606 1.95458V1.95458Z"
        fill={color || '#007AFF'}
      />
    </svg>
  );
};

export default UserIcon;