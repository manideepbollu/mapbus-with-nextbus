import {
    bool,
    string,
    object,
    func
} from 'prop-types';

export const appTypes = {
    loader: bool
};

export const mapTypes = {
    dispatch: func,
    fetching: bool,
    geojson: object,
    error: string
};