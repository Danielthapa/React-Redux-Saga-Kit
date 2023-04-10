import styled from 'styled-components';

const StyledOverlayContainer = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default StyledOverlayContainer;
