import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeojsonStart } from 'actions';
import { MAP } from '../utils/constants';
import { mapTypes } from '../utils/types';

export class Map extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getGeojsonStart(MAP.geojson.neighborhoods));
  }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
  }

  render() {
    return (
      <p>
        I am Map!
      </p>
    );
  }
}

Map.propTypes = mapTypes;

const mapStateToProperties = state => {
  return {
    fetching: state.map.fetching,
    geojson: state.map.geojson,
    error: state.map.error
  };
};

export default connect(mapStateToProperties)(Map);
