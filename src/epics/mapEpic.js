import { queue, json } from 'd3';
import {Observable} from 'rxjs';
import { GET_GEOJSON_START } from 'actions/actionTypes';
import { getGeojsonComplete } from 'actions';

let loadGeoJson = mapOptions => {
  return new Observable(observer => {
    const d3Queue = queue();

    console.log(mapOptions);

    mapOptions.forEach(mapOption => {
      d3Queue.defer(json, mapOption);
    });
    
    d3Queue.await((error, ...jsons) => {
        if (error) {
          observer.error(error);
        }
        
        let geoJson = [];

        for(var i = 0; i < jsons.length; i++) {
          geoJson = [...geoJson, ...jsons[i].features];
        }
        observer.next(geoJson);
      });
  });
};

export default action$ => {
  return action$
    .ofType(GET_GEOJSON_START)
    .switchMap(action => loadGeoJson(action.payload))
    .map(response => getGeojsonComplete(response));
};