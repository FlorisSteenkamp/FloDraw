
import { circle } from './draw/circle';
import { crossHair } from './draw/cross-hair';
import { dot } from './draw/dot';
import { line } from './draw/line';
import { rect } from './draw/rect';
import { polygon } from './draw/polygon';
import { loop } from './draw/loop';
import { polyline } from './draw/polyline';
import { beziers } from './draw/beziers';
import { cubicBezier } from './draw/cubic-bezier';
import { bezier } from './draw/bezier';
import { bezierPiece } from './draw/bezier-piece';
import { quadBezier } from './draw/quad-bezier';


let drawFs = {
	circle,
	crossHair,
	dot,
	line,
	rect,
	beziers,
	bezier,
	bezierPiece,
	quadBezier,
	cubicBezier,
	polygon,
	loop,
	polyline
}


export { drawFs }
