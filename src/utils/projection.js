import { geoMercator } from 'd3';
import { MAP } from './constants';

/**
 * Helper function to convert GPS coordinates to page spacial coordinates using d3.geoMercator()
 */
export default geoMercator()
  .center([MAP.center.lng, MAP.center.lat])
  .scale(MAP.scale)
  .translate([MAP.width / 2, MAP.height / 2]);
