import * as React from 'react';

import { ThemePlaygroundContext } from '../../contexts/ThemePlaygroundProvider';

import Code from '../Code/Code';
import SettingsItem from '../SettingsItem/SettingsItem';
import RadioGroup from '../RadioGroup/RadioGroup';

import StyledPanel from './Panel.style';

const Panel = ({ className }: { className?: string | null }) => {
  const {
    themes,
    activeTheme: { theme, name },
    updateActiveTheme,
    config
  } = React.useContext(ThemePlaygroundContext);

  return (
    <StyledPanel className={className}>
      {Object.entries(theme).length > 0 && (
        <>
          <div className="panel__content">
            {themes.length > 1 && (
              <div className="panel__themes">
                <RadioGroup
                  label="Active Theme"
                  name="themes"
                  value={name}
                  onChange={val =>
                    updateActiveTheme(themes.filter(t => t.name === val)[0])
                  }
                  options={themes.map(t => ({ label: t.name, value: t.name }))}
                />
              </div>
            )}
            <SettingsItem />
            {config.showCode && <Code value={theme} />}
          </div>
        </>
      )}
    </StyledPanel>
  );
};

export default Panel;
