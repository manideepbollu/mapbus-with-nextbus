import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeojsonStart } from 'actions';
import { MAP } from '../utils/constants';
import { projection } from '../utils/projection';
import { mapTypes } from '../utils/types';
import { geoPath, select } from 'd3';

class Map extends Component {
  constructor() {
    super();
    this.renderMap.bind(this);
  }

  renderMap() {
    const node = this.node;
    const path = geoPath()
      .projection(projection);

    const selection = select(node)
      .selectAll('path')
      .data(this.props.geojson);

    selection.enter()
      .append('path')
      .attr('d', path);
  }

  componentDidMount() {
    // Subscribe to updates in Map Data
    this.props.dispatch(getGeojsonStart(MAP.geojson.neighborhoods));
  }

  componentDidUpdate() {
    // Render map everytime component updates
    this.renderMap();
  }

  render() {
    return (
      <g id="map" ref={node => this.node = node} />
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
