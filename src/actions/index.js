/**
 * Single point of update for all actions
 */
import {
  APP_LOAD,
  GET_GEOJSON_START,
  GET_GEOJSON_ERROR,
  GET_GEOJSON_COMPLETE,
  GET_VEHICLE_POSITIONS_START,
  GET_VEHICLE_POSITIONS_ERROR,
  GET_VEHICLE_POSITIONS_COMPLETE,
  SET_ROUTES_FOR_FILTER,
  ADD_BLOCKED_ROUTE,
  REMOVE_BLOCKED_ROUTE,
  ADD_BLOCKED_MAP_OPTION,
  REMOVE_BLOCKED_MAP_OPTION
} from './actionTypes';
import actionCreator from './actionCreator';

export const loadApp = actionCreator(APP_LOAD);

export const getGeojsonStart = actionCreator(GET_GEOJSON_START);
export const getGeojsonError = actionCreator(GET_GEOJSON_ERROR);
export const getGeojsonComplete = actionCreator(GET_GEOJSON_COMPLETE);

export const getVehiclePositionsStart = actionCreator(GET_VEHICLE_POSITIONS_START);
export const getVehiclePositionsError = actionCreator(GET_VEHICLE_POSITIONS_ERROR);
export const getVehiclePositionsComplete = actionCreator(GET_VEHICLE_POSITIONS_COMPLETE);

export const setRoutesForFilter = actionCreator(SET_ROUTES_FOR_FILTER);
export const addBlockedRoute = actionCreator(ADD_BLOCKED_ROUTE);
export const removeBlockedRoute = actionCreator(REMOVE_BLOCKED_ROUTE);

export const addBlockedMapOption = actionCreator(ADD_BLOCKED_MAP_OPTION);
export const removeBlockedMapOption = actionCreator(REMOVE_BLOCKED_MAP_OPTION);
