import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVehiclePositionsStart } from 'actions';
import { MAP, VEHICLES } from '../utils/constants';
import { projection } from '../utils/projection';
import { vehicleTypes } from '../utils/types';
import { local, select } from 'd3';

const TRANSITION_DURATION = 4000;

class Vehicles extends Component {
    constructor() {
        super();
    }

    renderVehicles() {
        const node = this.node;

        // Calculate Vehicle icon transformation
        const nodeTransform = (node, coordinates) => {
            const D3Projection = projection(coordinates).map(
                coordinate => coordinate - VEHICLES.iconSize / 2
            );

            return 'translate(' + D3Projection[0] + ',' + D3Projection[1] + ')';
        }

        const selection = select(node)
            .selectAll('image')
            .data(this.props.vehicles, vehicle => vehicle.id);

        selection.enter()
            .append('circle')
            .attr('r', VEHICLES.iconSize)
            .attr('transform', function(vehicle) {
                return nodeTransform(this, vehicle.coordinates)
            });

        selection.exit()
            .transition()
            .duration(TRANSITION_DURATION)
            .attr('opacity', 0)
            .remove();

        selection.transition()
            .duration(TRANSITION_DURATION)
            .attr('transform', function(vehicle) {
                return nodeTransform(this, vehicle.coordinates)
            });
    }

    componentDidMount() {
        this.renderVehicles();
    }

    componentDidUpdate() {
        this.renderVehicles();
    }

    render() {
        return (
            <g id="vehicles" ref={node => this.node = node} />
        );
    }
}

Vehicles.propTypes = vehicleTypes;

const mapStateToProperties = state => {
    return {
        fetching: state.vehicles.fetching,
        vehicles: state.vehicles.vehicles,
        error: state.vehicles.error
    };
};

export default connect(mapStateToProperties)(Vehicles);
