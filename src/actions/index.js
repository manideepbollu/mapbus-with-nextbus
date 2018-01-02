import actionTypes from './actionTypes';
import { actionCreator } from './actionCreater';

export const loadApp = actionCreator(actionTypes.APP_LOAD);

export const getGeojsonStart = actionCreator(actionTypes.GET_GEOJSON_START);
export const getGeojsonError = actionCreator(actionTypes.GET_GEOJSON_ERROR);
export const getGeojsonComplete = actionCreator(actionTypes.GET_GEOJSON_COMPLETE);
