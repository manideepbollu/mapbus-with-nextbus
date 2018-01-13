import actionTypes from './actionTypes';
import { actionCreator } from './actionCreater';

export const loadApp = actionCreator(actionTypes.APP_LOAD);

export const getGeojsonStart = actionCreator(actionTypes.GET_GEOJSON_START);
export const getGeojsonError = actionCreator(actionTypes.GET_GEOJSON_ERROR);
export const getGeojsonComplete = actionCreator(actionTypes.GET_GEOJSON_COMPLETE);

export const getVehiclePositionsStart = actionCreator(actionTypes.GET_VEHICLE_POSITIONS_START);
export const getVehiclePositionsError = actionCreator(actionTypes.GET_VEHICLE_POSITIONS_ERROR);
export const getVehiclePositionsComplete = actionCreator(actionTypes.GET_VEHICLE_POSITIONS_COMPLETE);

export const getRoutesForFilter = actionCreator(actionTypes.GET_ROUTES_FOR_FILTER);