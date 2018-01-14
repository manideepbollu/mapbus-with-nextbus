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

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_VEHICLE_POSITIONS_START:
            return { 
                ...state, 
                fetching: true 
            };
        case GET_VEHICLE_POSITIONS_COMPLETE:
            return { 
                ...state, 
                fetching: false, 
                vehicles: action.payload,
                error: null 
            };
        case GET_VEHICLE_POSITIONS_ERROR:
            return { 
                ...state, 
                fetching: false, 
                vehicles: [],
                error: action.payload 
            };
        default:
            return state;
    }
}
