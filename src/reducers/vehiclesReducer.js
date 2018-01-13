import {
    GET_VEHICLE_POSITIONS_START,
    GET_VEHICLE_POSITIONS_ERROR,
    GET_VEHICLE_POSITIONS_COMPLETE
} from 'actions/actionTypes';

const initialState = {
    fetching: false,
    vehicles: [],
    error: null
};

const formatLocations = vehicles => vehicles.map(vehicle => Object.create({
    id: vehicle.id,
    coordinates: [
        vehicle.lon,
        vehicle.lat
    ]
}));

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_VEHICLE_POSITIONS_START:
            return { ...state, fetching: true };
        case GET_VEHICLE_POSITIONS_COMPLETE:
            return { ...state, fetching: false, vehicles: formatLocations(action.payload.vehicle) };
        default:
            return state;
    }
}
