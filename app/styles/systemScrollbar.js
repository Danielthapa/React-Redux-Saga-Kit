const SystemScrollbar = `
&::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #8e8e93;
    opacity: 0;
  }

  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }

  /* &::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:active {
  
  } */
  /* 
  &::-webkit-scrollbar-thumb:active {
  } */
`;

export default SystemScrollbar;
