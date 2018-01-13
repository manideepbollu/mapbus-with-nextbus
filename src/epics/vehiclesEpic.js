import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { 
    getVehiclePositionsComplete,
    getRoutesForFilter 
} from 'actions';
import { GET_VEHICLE_POSITIONS_START } from '../actions/actionTypes';
import { VEHICLES } from '../utils/constants';

const mapRoutes = (vehiclePositions) => {
    const routes = vehiclePositions.map(vehicle => vehicle.routeTag);
    const dispatch = () => void;
    dispatch(getRoutesForFilter(routes));
}

const loadVehiclePositions = () => {
    return ajax({ 'url': VEHICLES.api, 'crossDomain': true })
        .map(({ response }) => {
            mapRoutes(response.vehicle);
            return getVehiclePositionsComplete(response);
        });
};

const intervalPolling = () => {
    return Observable
        // emit locations immediatly and then every 15s
        .timer(0, VEHICLES.pollingInterval)
        .switchMap(loadVehiclePositions);
};


export default action$ => {
    return action$
        .ofType(GET_VEHICLE_POSITIONS_START)
        .switchMap(intervalPolling);
};