import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {
  getVehiclePositionsComplete,
  getVehiclePositionsError,
  setRoutesForFilter
} from 'actions';
import { GET_VEHICLE_POSITIONS_START } from '../actions/actionTypes';
import { VEHICLES } from '../utils/constants';

/**
 * Format locations from the NextBus response
 * @param {*} vehicles
 */
const formatLocations = vehicles => vehicles.map(vehicle => Object.create({
  id: vehicle.id,
  routeId: vehicle.routeTag,
  coordinates: [
    vehicle.lon,
    vehicle.lat
  ]
}));

/**
 * Format routes from the NextBus response
 * @param {*} vehicles
 */
const formatRoutes = vehicles => {
  const routeArray = vehicles.map(vehicle =>
    vehicle.routeTag);
  return [...new Set(routeArray)];
};

/**
 * LoadVehiclePositions() is responsible for dispatching
 * getVehiclePositionsComplete() & setRoutesForFilter()
 */
const loadVehiclePositions = () =>
  ajax({ url: VEHICLES.api, crossDomain: true })
    .mergeMap(({ response }) =>
      Observable.of(
        getVehiclePositionsComplete(formatLocations(response.vehicle)),
        setRoutesForFilter(formatRoutes(response.vehicle))
      ))
    .catch(error =>
      Observable.of(getVehiclePositionsError(error.message)));

/**
 * Set timer for polling at a certain interval
 */
const intervalPolling = () => Observable
  .timer(0, VEHICLES.pollingInterval)
  .mergeMap(loadVehiclePositions);

/**
 * Epic which runs parallel to reducers when GET_VEHICLE_POSITIONS_START action is dispatched
 */
export default action$ => action$
  .ofType(GET_VEHICLE_POSITIONS_START)
  .switchMap(intervalPolling);
