import { queue, json } from 'd3';
import { Observable } from 'rxjs';
import { GET_GEOJSON_START } from 'actions/actionTypes';
import { getGeojsonComplete } from 'actions';

/**
 * load JSON from sfmaps directory using d3.json and given mapOptions
 * @param {*} mapOptions
 */
const loadGeoJson = mapOptions => new Observable(observer => {
  const d3Queue = queue();

  mapOptions.forEach(mapOption => {
    d3Queue.defer(json, mapOption);
  });

  d3Queue.await((error, ...responses) => {
    if (error) {
      observer.error(error);
    }

    let geoJson = [];

    responses.forEach(response => {
      geoJson = [...geoJson, ...response.features];
    });

    observer.next(geoJson);
  });
});

/**
 * Epic which runs parallel to reducers when GET_GEOJSON_START action is dispatched
 */
export default action$ => action$
  .ofType(GET_GEOJSON_START)
  .switchMap(action => loadGeoJson(action.payload))
  .map(response => getGeojsonComplete(response));
