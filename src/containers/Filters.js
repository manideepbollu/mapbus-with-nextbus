import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVehiclePositionsStart } from 'actions';
import { VEHICLES } from '../utils/constants';
import { filtersTypes } from '../utils/types';
import { filter, button } from './stylesheets/app.scss';

class Filters extends Component {
    componentDidMount() {
        this.props.dispatch(getVehiclePositionsStart(VEHICLES.api));
    }

    render() {
        return (
            <div className={filter}>
                <a className={button}>22</a>
                <a className={button}>33</a>
                <a className={button}>44</a>
                <a className={button}>22</a>
                <a className={button}>33</a>
                <a className={button}>33</a>
                <a className={button}>44</a>
                <a className={button}>22</a>
                <a className={button}>33</a>
                <a className={button}>33</a>
                <a className={button}>44</a>
                <a className={button}>22</a>
                <a className={button}>33</a>
            </div>
        );
    }
}

Filters.propTypes = filtersTypes;

const mapStateToProperties = state => {
    return {
        routes: state.filters.routes,
        blockedRoutes: state.filters.blockedRoutes,
        mapOptions: state.filters.mapOptions,
        blockedMapOptions: state.filters.blockedMapOptions
    };
};

export default connect(mapStateToProperties)(Filters);
