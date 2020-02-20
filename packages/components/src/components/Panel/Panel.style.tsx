import styled from 'styled-components';

const StyledPanel = styled.div`
  height: calc(100% - 2rem);
  margin: 0;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.backgroundDark};
  color: ${props => props.theme.text};

  .panel__content {
    position: relative;
    flex-grow: 2;
  }

  .panel__themes {
    display: flex;
    justify-content: center;
    padding: 1rem;
    min-height: 50px;
    background: ${props => props.theme.backgroundLight};
  }
`;

export default StyledPanel;
