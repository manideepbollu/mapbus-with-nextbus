import * as d3 from 'd3';
import {Observable} from 'rxjs';
// import {ajax} from 'rxjs/observable/dom/ajax';
import { GET_GEOJSON_START } from 'actions/actionTypes';
import { getGeojsonComplete } from 'actions';

let loadGeoJson = locationJson => {
  return new Observable(observer => {
    d3.json(locationJson, function (err, geojson) {
      if (err) {
        observer.error(err);
      }
      observer.next(geojson);
    });
  });
};

export default action$ => {
  return action$
    .ofType(GET_GEOJSON_START)
    .switchMap(action => loadGeoJson(action.payload))
    .delay(500) // simulate a delay to see the loader
    .take(1)
    .map(resp => getGeojsonComplete(resp));
};