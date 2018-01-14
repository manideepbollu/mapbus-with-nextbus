import * as d3 from 'd3';
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
 * @param {*} vehicles = "vehicle" property from NextBus response
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
 * @param {*} vehicles = "vehicle" property from NextBus response
 */
const formatRoutes = vehicles => {
    const routeArray = vehicles.map(vehicle =>
        vehicle.routeTag
    )
    return [ ...new Set(routeArray) ];
};

/**
 * LoadVehiclePositions() is responsible for dispatching 
 * getVehiclePositionsComplete() & setRoutesForFilter()
 */
const loadVehiclePositions = () => {
    return ajax({ 'url': VEHICLES.api, 'crossDomain': true })
        .mergeMap(({response}) => 
            Observable.of(
                getVehiclePositionsComplete(formatLocations(response.vehicle)),
                setRoutesForFilter(formatRoutes(response.vehicle))
            )
        )
        .catch(error => 
            Observable.of(getVehiclePositionsError(error.message))
        );
};

/**
 * Set timer for polling at a certain interval
 */
const intervalPolling = () => {
    return Observable
        .timer(0, VEHICLES.pollingInterval)
        .mergeMap(loadVehiclePositions);
};


export default action$ => {
    return action$
        .ofType(GET_VEHICLE_POSITIONS_START)
        .switchMap(intervalPolling);
};