import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    // Render a fresh map everytime component updates
    select(node).selectAll('path').remove();

    const selection = select(node)
      .selectAll('path')
      .data(this.props.geojson);

    selection.enter()
      .append('path')
      .attr('d', path);
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
