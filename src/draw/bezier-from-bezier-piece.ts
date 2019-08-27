
import { evaluateBezier } from "./evaluate-bezier";
import { splitAt } from "./split-at";


/**
 * Returns a new bezier from the given bezier by limiting its t range. 
 * 
 * Duplicated here so we don't circularly depend on flo-bezier.
 * 
 * Uses de Casteljau's algorithm.
 * 
 * @param ps A bezier
 * @param tRange A t range
 */
function bezierFromBezierPiece(ps: number[][], tRange: number[]) {

	// If tRange = [0,1] then return original bezier.
	if (tRange[0] === 0 && tRange[1] === 1) {
		return ps;
	}

	// If tRange[0] === tRange[1] then return a single point degenerated bezier.
	if (tRange[0] === tRange[1]) {
		let p = evaluateBezier(ps, tRange[0]);
		return [p,p,p,p];
	}

	if (tRange[0] === 0) {
		return splitAt(ps, tRange[1])[0];
	} 

	if (tRange[1] === 1) {
		return splitAt(ps, tRange[0])[1];
	} 

	// At this stage we know the t range is not degenerate and tRange[0] !== 0 
	// and tRange[1] !== 1
	return splitAt(
		splitAt(ps, tRange[0])[1], 
		(tRange[1]-tRange[0]) / (1-tRange[0])
	)[0];
}


export { bezierFromBezierPiece }
