import React from 'react';
import styled from 'styled-components';

const StyledIconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  flex-shrink: 0;
  /* cursor: pointer; */
`;

const withIconWrapper = (Icon) => {
  return (props) => {
    return (
      <StyledIconWrapper>
        <Icon {...props} />
      </StyledIconWrapper>
    );
  };
};

export default withIconWrapper;
