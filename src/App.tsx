import React from 'react';
import {Weather} from './ui/organisms/Weather/Weather'

import './App.css';
import './styles.scss'

export const App : React.FC = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  )
}
