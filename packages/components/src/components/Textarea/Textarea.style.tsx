import styled from 'styled-components';

const StyledTextarea = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  textarea {
    width: 100%;
    height: 80px;
    appeareance: none;
    resize: none;
    background: none;
    padding: 5px;
    max-width: 200px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
  }
`;

export default StyledTextarea;
