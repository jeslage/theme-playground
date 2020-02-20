import * as React from 'react';

import { Panel } from '@theme-playground/components';

import StyledContent from './Content.style';

type ContentProps = {};

const Content: React.FC<ContentProps> = () => {
  const [minimized, setMinimized] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleKeyDown = e => {
    if (e.keyCode === 27 && !minimized) setMinimized(true);
  };

  const handleOutsideClick = e => {
    if (ref.current && !ref.current.contains(e.target) && !minimized)
      setMinimized(true);
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOutsideClick, handleKeyDown]);

  return (
    <StyledContent minimized={minimized} ref={ref}>
      <div className="themePlayground__controls">
        <button type="button" onClick={() => setMinimized(prev => !prev)}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            {minimized && <rect height="12" rx="1" width="2" x="11" y="6" />}
          </svg>
        </button>
      </div>
      {!minimized && (
        <div className="themePlayground__wrapper">
          <Panel />
        </div>
      )}
    </StyledContent>
  );
};

export default Content;
