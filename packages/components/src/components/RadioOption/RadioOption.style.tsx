import styled from 'styled-components';

const StyledRadioOption = styled.label`
  position: relative;
  cursor: pointer;
  font-size: 12px;

  input {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    visibility: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    margin: 0 0 0 10px;
    border-radius: 3rem;
    opacity: 0.5;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.2s ease-in-out;

    svg {
      width: 20px;
      height: auto;
      fill: ${({ theme }) => theme.text};
    }
  }

  div:hover {
    opacity: 1;
  }

  input:checked + div {
    opacity: 1;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.backgroundDark};
  }
`;

export default StyledRadioOption;
