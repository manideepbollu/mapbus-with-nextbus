import React from 'react';
import { connect } from 'react-redux';
import { loader } from './stylesheets/app.scss';
import { loaderTypes } from '../utils/types';

/**
 * Loader Component which shows a spinning loader when the Map/Vehicles are in fetching state
 */
const Loader = ({
  mapFetching,
  vehiclesFetching
}) => {
  if (mapFetching || vehiclesFetching) {
    return (
      <div className={loader} />
    );
  }
  return null;
};

Loader.propTypes = loaderTypes;

const mapStateToProperties = state => ({
  mapFetching: state.map.fetching,
  vehiclesFetching: state.vehicles.fetching
});

export default connect(mapStateToProperties)(Loader);
