import { MAP } from './constants';
import { geoMercator } from 'd3';

export const projection = geoMercator()
.center([MAP.center.lng, MAP.center.lat])
.scale(MAP.scale)
.translate([MAP.width / 2, MAP.height / 2]);