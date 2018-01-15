import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions';
import {
  container,
  mapContainer,
  mapVector
} from './stylesheets/app.scss';
import { appTypes } from '../utils/types';
import ErrorBoundary from './ErrorBoundary';
import Map from './Map';
import Vehicles from './Vehicles';
import ControlPanel from './ControlPanel';
import Loader from './Loader';
import Footer from './Footer';

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={container} >
        <div className={mapContainer}>
          <ErrorBoundary >
            <Loader />
            <svg className={mapVector} viewBox="0 0 1000 1000" >
              <Map />
              <Vehicles />
            </svg>
            <Footer />
          </ErrorBoundary>
        </div>
        <ControlPanel />
      </div>
    );
  }
}

AppContainer.propTypes = appTypes;

const mapStateToProperties = state => ({
  loaded: state.app.loaded
});

export default connect(mapStateToProperties)(AppContainer);
