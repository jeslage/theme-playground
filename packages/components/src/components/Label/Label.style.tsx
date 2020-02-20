import styled from 'styled-components';

const StyledLabel = styled.div`
  flex-grow: 2;
  padding-right: 20px;

  .label {
    margin: 0;
    display: flex;
    font-size: 14px;
    align-items: center;

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${({ theme }) => theme.border};
    }
  }

  .description {
    margin: 0;
    margin-top: 10px;
  }
`;

export default StyledLabel;
