import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0.25rem;
  border: 0;
  border-radius: 3em;
  padding: 0.75rem 1rem;
  text-align: center;
  transition: all 150ms ease-out;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};

  &:hover {
    background: ${({ theme }) => theme.border};
    border-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.backgroundDark};
  }

  &:active {
    color: ${({ theme }) => theme.backgroundDark};
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.backgroundDark};
  }

  svg {
    display: inline-block;
    height: 16px;
    width: 16px;
    vertical-align: top;
    margin-right: 6px;
    margin-top: -1px;
    margin-bottom: -1px;
    pointer-events: none;
  }
`;

export default StyledButton;
