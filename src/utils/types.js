/**
 * Single point of update for all react component PropTypes
 */
import {
  bool,
  string,
  array,
  func
} from 'prop-types';

export const appTypes = {
  loader: bool
};

export const errorTypes = {
  children: array
};

export const loaderTypes = {
  mapFetching: bool,
  vehiclesFetching: bool
};

export const mapTypes = {
  dispatch: func,
  fetching: bool,
  geojson: array,
  error: string
};

export const vehicleTypes = {
  dispatch: func,
  fetching: bool,
  vehiclePositions: array,
  blockedRoutes: array,
  error: string
};

export const routeFilterTypes = {
  dispatch: func,
  routes: array,
  blockedRoutes: array
};

export const mapFilterTypes = {
  dispatch: func,
  routes: array,
  blockedRoutes: array
};
