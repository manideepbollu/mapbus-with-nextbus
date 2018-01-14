import React, { Component } from 'react';
import RouteFilter from './RouteFilter';
import MapFilter from './MapFilter';

class Filters extends Component {
    render() {
        return (
            <div>
                <MapFilter />
                <RouteFilter />
            </div>
        );
    }
}

export default Filters;
