import React from 'react';
import { controlPanel } from './stylesheets/app.scss';
import Header from './Header';
import Filters from './Filters';

const ControlPanel = () => (
  <div className={controlPanel}>
    <Header />
    <Filters />
  </div>
);

export default ControlPanel;
