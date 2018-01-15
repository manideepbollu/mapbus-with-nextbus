/**
 * Single point of update for app wide constants
 */
const sfmapsDir = '../../sfmaps/';
const lastTime = Math.round((new Date()).getTime() / 1000) - 15;

export const MAP = {
  geojson: {
    neighborhoods: `${sfmapsDir}neighborhoods.json`,
    arteries: `${sfmapsDir}arteries.json`,
    freeways: `${sfmapsDir}freeways.json`,
    streets: `${sfmapsDir}streets.json`,
  },
  width: 1000,
  height: 1000,
  scale: 340000,
  center: {
    lat: 37.767572,
    lng: -122.437297
  }
};

export const VEHICLES = {
  pollingInterval: 15000,
  iconSize: 7,
  api: `//webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&t=${lastTime}`
};
