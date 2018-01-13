import { 
    GET_ROUTES_FOR_FILTER,
    GET_MAPOPTIONS_FOR_FILTER
} from 'actions/actionTypes';

const initialState = {
    routes: [],
    blockedRoutes: [],
    mapOptions: [],
    blockedMapOptions: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ROUTES_FOR_FILTER:
            return { ...state, routes: action.payload };
        default:
            return state;
    }
}
