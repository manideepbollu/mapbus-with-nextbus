import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geoPath, select } from 'd3';
import { mapTypes } from '../utils/types';
import projection from '../utils/projection';

class Map extends Component {
  constructor() {
    super();
    this.renderMap.bind(this);
  }

  componentDidUpdate() {
    // Render map everytime component updates
    this.renderMap();
  }

  renderMap() {
    const { node } = this;
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

    if (this.props.error) {
      throw new Error(this.props.error);
    }
  }

  render() {
    return (
      <g id="map" ref={node => { this.node = node; }} />
    );
  }
}

Map.propTypes = mapTypes;

const mapStateToProperties = state => ({
  fetching: state.map.fetching,
  geojson: state.map.geojson,
  error: state.map.error
});

export default connect(mapStateToProperties)(Map);
