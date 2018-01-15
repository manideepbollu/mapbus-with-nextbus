import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addBlockedRoute,
  removeBlockedRoute
} from 'actions';
import { routeFilterTypes } from '../utils/types';
import { filter, routeButton, blocked, extended } from './stylesheets/app.scss';

class RouteFilter extends Component {
  getClassName(route) {
    const classes = route.length < 4 ? routeButton : [routeButton, extended].join(' ');
    return this.isBlocked(route) ? [classes, blocked].join(' ') : classes;
  }

  updateFilter(route) {
    if (this.isBlocked(route)) {
      this.props.dispatch(removeBlockedRoute(route));
    } else {
      this.props.dispatch(addBlockedRoute(route));
    }
  }

  isBlocked(route) {
    return this.props.blockedRoutes.includes(route);
  }

  render() {
    const { routes } = this.props;
    return (
      <div id="route-filter" className={filter}>
        <p>Route Filter</p>
        {routes.map((route, index) =>
          (<a
            className={this.getClassName(route)}
            key={index}
            onClick={this.updateFilter.bind(this, route)}
          >
            {route}
          </a>))}
      </div>
    );
  }
}

RouteFilter.propTypes = routeFilterTypes;

const mapStateToProperties = state => ({
  routes: state.filters.routes,
  blockedRoutes: state.filters.blockedRoutes
});

export default connect(mapStateToProperties)(RouteFilter);
