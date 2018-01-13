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
    error: string
};

export const filtersTypes = {
    dispatch: func,
    routes: array,
    blockedRoutes: array,
    mapOptions: array,
    blockedMapOptions: array
};