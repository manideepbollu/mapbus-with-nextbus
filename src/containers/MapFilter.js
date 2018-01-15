/* eslint class-methods-use-this: ["error", { "exceptMethods": ["formatMapOptionLabel"] }] */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getGeojsonStart,
  addBlockedMapOption,
  removeBlockedMapOption
} from 'actions';
import { mapFilterTypes } from '../utils/types';
import { filter, mapButton, blocked } from './stylesheets/app.scss';

class MapFilter extends Component {
  componentDidMount() {
    this.props.dispatch(getGeojsonStart(this.filteredMapOptions()));
  }

  componentDidUpdate() {
    this.props.dispatch(getGeojsonStart(this.filteredMapOptions()));
  }

  formatMapOptionLabel(mapOption) {
    const formattedOption = mapOption.match(/([^/]+)(\.[^.]+$)/)[1];
    return formattedOption.charAt(0).toUpperCase() + formattedOption.slice(1);
  }

  updateFilter(mapOption) {
    if (this.isBlocked(mapOption)) {
      this.props.dispatch(removeBlockedMapOption(mapOption));
    } else {
      this.props.dispatch(addBlockedMapOption(mapOption));
    }
  }

  isBlocked(mapOption) {
    return this.props.blockedMapOptions.includes(mapOption);
  }

  filteredMapOptions() {
    const {
      mapOptions,
      blockedMapOptions
    } = this.props;
    return mapOptions.filter(option => !blockedMapOptions.includes(option));
  }

  render() {
    const { mapOptions } = this.props;
    return (
      <div id="map-filter" className={filter}>
        <p>Map Filter</p>
        {mapOptions.map((mapOption, index) =>
          (<a
            className={this.isBlocked(mapOption) ? [mapButton, blocked].join(' ') : mapButton}
            key={index}
            onClick={this.updateFilter.bind(this, mapOption)}
          >
            {this.formatMapOptionLabel(mapOption)}
          </a>))}
      </div>
    );
  }
}

MapFilter.propTypes = mapFilterTypes;

const mapStateToProperties = state => ({
  mapOptions: state.filters.mapOptions,
  blockedMapOptions: state.filters.blockedMapOptions
});

export default connect(mapStateToProperties)(MapFilter);
