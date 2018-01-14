import { 
    GET_GEOJSON_START,
    GET_GEOJSON_ERROR,
    GET_GEOJSON_COMPLETE
} from 'actions/actionTypes';

const initialState = {
    fetching: false,
    geojson: [],
    error: null
};

export default (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_GEOJSON_START:
            return { ...state, fetching: true };
        case GET_GEOJSON_COMPLETE:
            return { ...state, fetching: false, geojson: action.payload };
        default:
            return state;
    }
}
