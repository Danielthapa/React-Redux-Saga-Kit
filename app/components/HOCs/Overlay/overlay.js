import React, { useState } from 'react';
import StyledOverlayContainer from './style';

const withOverlay = WrappedComponent => {
  return props => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = e => {
      setOpen(!isOpen);
      e.stopPropagation();
    };

    return (
      <StyledOverlayContainer onClick={handleClick}>
        <WrappedComponent {...props} isOpen={isOpen}>
          {isOpen && <div className="overlay" />}
        </WrappedComponent>
      </StyledOverlayContainer>
    );
  };
};

export default withOverlay;
