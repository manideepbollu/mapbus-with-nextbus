import {
  SET_ROUTES_FOR_FILTER,
  ADD_BLOCKED_ROUTE,
  REMOVE_BLOCKED_ROUTE,
  ADD_BLOCKED_MAP_OPTION,
  REMOVE_BLOCKED_MAP_OPTION
} from 'actions/actionTypes';
import { MAP } from '../utils/constants';

const initialState = {
  routes: [],
  blockedRoutes: [],
  mapOptions: [
    MAP.geojson.neighborhoods,
    MAP.geojson.arteries,
    MAP.geojson.freeways,
    MAP.geojson.streets
  ],
  blockedMapOptions: [
    MAP.geojson.streets
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTES_FOR_FILTER:
      return {
        ...state,
        routes: action.payload
      };
    case ADD_BLOCKED_ROUTE:
      return {
        ...state,
        blockedRoutes: [...state.blockedRoutes, action.payload]
      };
    case REMOVE_BLOCKED_ROUTE:
      return {
        ...state,
        blockedRoutes: state.blockedRoutes.filter(route => route !== action.payload)
      };
    case ADD_BLOCKED_MAP_OPTION:
      return {
        ...state,
        blockedMapOptions: [...state.blockedMapOptions, action.payload]
      };
    case REMOVE_BLOCKED_MAP_OPTION:
      return {
        ...state,
        blockedMapOptions: state.blockedMapOptions.filter(mapOption => mapOption !== action.payload)
      };
    default:
      return state;
  }
};
