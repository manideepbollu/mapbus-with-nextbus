import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeojsonStart } from 'actions';
import { MAP } from '../utils/constants';
import {
  mapContainer,
  mapVector
} from './stylesheets/map.scss';
import { mapTypes } from '../utils/types';
import * as d3 from 'd3';

class Map extends Component {
  constructor() {
    super();
    this.projection = d3.geoMercator()
      .center([MAP.center.lng, MAP.center.lat])
      .scale(MAP.scale)
      .translate([MAP.width / 2, MAP.height / 2]);
  }

  renderMap(projection, features) {
    let path = d3.geoPath()
      .projection(projection);

    d3.select('g#map')
      .selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', path);
  }

  componentDidMount() {
    this.props.dispatch(getGeojsonStart(MAP.geojson.neighborhoods));
  }

  componentWillReceiveProps(nextProps) {
    const {
      fetching,
      geojson,
      error
    } = nextProps;

    if (!fetching && geojson) {
      this.renderMap(this.projection, nextProps.geojson.features);
    }
  }

  render() {
    return (
      <div className={mapContainer}>
        <svg className={mapVector} viewBox="0 0 1000 1000" >
          <g id="map" />
          <g id="vehicles" />
        </svg>
      </div>
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
