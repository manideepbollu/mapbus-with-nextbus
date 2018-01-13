import React, { Component } from 'react';
import { controlPanel } from './stylesheets/app.scss';
import Header from './Header';
import Filters from './Filters';

class ControlPanel extends Component {
  render() {
    return (
      <div className={controlPanel}>
        <Header />
        <Filters />
      </div>
    )
  }
}

export default ControlPanel;
