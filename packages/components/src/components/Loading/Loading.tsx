import * as React from 'react';

import StyledLoading from './Loading.style';

const Loading: React.FC<{ isLoading?: boolean }> = ({ isLoading }) => {
  return (
    <StyledLoading isLoading={isLoading}>
      <div />
      <span>Updating</span>
    </StyledLoading>
  );
};

export default Loading;
