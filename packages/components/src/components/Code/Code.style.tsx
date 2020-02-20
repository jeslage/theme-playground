import styled from 'styled-components';

const StyledCode = styled.div`
  margin: 1.5rem 1rem;

  .code__wrapper {
    position: relative;
  }

  code {
    display: block;
    margin: 0;
    background: none;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
  }

  pre {
    margin: 0;
    padding: 1rem;
    font-size: 14px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    outline: none;
    border: none;
    padding: 5px 10px;
    border-radius: 0px 5px 0px 5px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};

    &:active {
      color: ${({ theme }) => theme.text};
    }

    &:disabled {
      opacity: 1;
    }
  }
`;

export default StyledCode;
