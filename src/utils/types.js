import {
    bool,
    string,
    array,
    object,
    func
} from 'prop-types';

export const appTypes = {
    loader: bool
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