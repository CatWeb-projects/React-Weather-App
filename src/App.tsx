import React from 'react';
import { Weather } from './ui/organisms/Weather/Weather';

import './styles.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
};
