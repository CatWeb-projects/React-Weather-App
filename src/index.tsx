import React from 'react';
import ReactDOM from 'react-dom';
import { Weather } from 'ui/organisms/Weather/Weather';
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
