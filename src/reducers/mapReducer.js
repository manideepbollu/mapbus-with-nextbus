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
  switch (action.type) {
    case GET_GEOJSON_START:
      return {
        ...state,
        fetching: true
      };
    case GET_GEOJSON_COMPLETE:
      return {
        ...state,
        fetching: false,
        geojson: action.payload,
        error: null
      };
    case GET_GEOJSON_ERROR:
      return {
        ...state,
        fetching: false,
        geojson: [],
        error: action.payload
      };
    default:
      return state;
  }
};
