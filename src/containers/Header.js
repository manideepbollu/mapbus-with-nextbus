import React, { Component } from 'react';
import { header } from './stylesheets/app.scss';

class Header extends Component {
  render() {
    return (
        <h1 className={header}>San Francisco - Vehicle Map</h1>
    );
  }
}

export default Header;
