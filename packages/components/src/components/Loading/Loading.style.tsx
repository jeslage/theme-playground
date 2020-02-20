import styled from 'styled-components';

interface LoadingProps {
  readonly isLoading: boolean;
}

const StyledLoading = styled.div<LoadingProps>`
  pointer-events: none;
  display: ${props => (props.isLoading ? 'inline-flex' : 'none')};
  visibility: ${props => (props.isLoading ? 'visible' : 'hidden')};
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 3rem;
  flex-grow: 2;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.backgroundDark};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);

  div {
    display: block;
    width: 12px;
    height: 12px;
    margin: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text} transparent
      ${({ theme }) => theme.text} transparent;
    animation: loading 1.2s linear infinite;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default StyledLoading;
