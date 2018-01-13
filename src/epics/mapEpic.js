import * as d3 from 'd3';
import {Observable} from 'rxjs';
import { GET_GEOJSON_START } from 'actions/actionTypes';
import { getGeojsonComplete } from 'actions';

let loadGeoJson = position => {
  return new Observable(observer => {
    d3.json(position, function (err, geojson) {
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
    .take(1)
    .map(response => getGeojsonComplete(response));
};