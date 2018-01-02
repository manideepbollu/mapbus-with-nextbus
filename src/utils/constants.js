const sfmapsDir = '../../sfmaps/';

export const MAP = {
  'geojson': {
    neighborhoods: sfmapsDir + 'neighborhoods.json',
    arteries: sfmapsDir + 'arteries.json',
    freeways: sfmapsDir + 'freeways.json',
    streets: sfmapsDir + 'streets.json',
  },
  'width': 1000,
  'height': 1000,
  'scale': 200000,
  'center': {
    'lat': 37.773972,
    'lng': -122.431297
  }
};

export const VEHICLES = {
  'pollingInterval': 15000
};