/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components';

interface StyledContentProps {
  readonly minimized: boolean;
}

const StyledContent = styled.div<StyledContentProps>`
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 500px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 999;

  .themePlayground__controls {
    display: flex;
    width: ${props => (props.minimized ? '40px' : '100%')};

    svg {
      width: 24px;
      height: 24px;
      fill: ${props => props.theme.border};
      transition: fill 0.2s ease-in-out;
    }

    button {
      width: ${props => (props.minimized ? '40px' : '100%')};
      height: 40px;
      background: ${props => props.theme.backgroundDark};
      color: ${props => props.theme.border};
      font-weight: bold;
      font-size: 1rem;
      outline: none;
      border: none;
      cursor: pointer;
      position: relative;
      z-index: 1;
      padding: 8px;
      margin: 0;
      text-align: right;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${props => props.theme.text};

        svg  {
          fill: ${props => props.theme.text};
        }
      }
    }

    .themePlayground__reset {
      text-align: left;
      padding: 8px 1rem;
      text-transform: uppercase;
      font-size: 12px;
    }
  }

  .themePlayground__wrapper {
    width: 100%;
    height: auto;
    max-width: 500px;
    max-height: calc(100vh - 40px);
    background: ${props => props.theme.backgroundDark};
    overflow-y: scroll;
  }
`;

export default StyledContent;
