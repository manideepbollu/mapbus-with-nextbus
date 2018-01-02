import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions';
import { container } from './stylesheets/app.scss';
import { appTypes } from '../utils/types';
import Map from './Map';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={container} >
        <Map />
      </div>
    );
  }
}

App.propTypes = appTypes;

const mapStateToProperties = state => {
  return {
    loaded: state.app.loaded
  };
};

export default connect(mapStateToProperties)(App);
