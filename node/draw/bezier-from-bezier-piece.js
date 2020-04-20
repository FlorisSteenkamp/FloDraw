"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluate_bezier_1 = require("./evaluate-bezier");
const split_at_1 = require("./split-at");
/**
 * Returns a new bezier from the given bezier by limiting its t range.
 *
 * Duplicated here so we don't circularly depend on flo-bezier.
 *
 * Uses de Casteljau's algorithm.
 *
 * @param ps a bezier
 * @param tRange a t range
 */
function bezierFromBezierPiece(ps, tRange) {
    // If tRange = [0,1] then return original bezier.
    if (tRange[0] === 0 && tRange[1] === 1) {
        return ps;
    }
    // If tRange[0] === tRange[1] then return a single point degenerated bezier.
    if (tRange[0] === tRange[1]) {
        let p = evaluate_bezier_1.evaluateBezier(ps, tRange[0]);
        return [p, p, p, p];
    }
    if (tRange[0] === 0) {
        return split_at_1.splitAt(ps, tRange[1])[0];
    }
    if (tRange[1] === 1) {
        return split_at_1.splitAt(ps, tRange[0])[1];
    }
    // At this stage we know the t range is not degenerate and tRange[0] !== 0 
    // and tRange[1] !== 1
    return split_at_1.splitAt(split_at_1.splitAt(ps, tRange[0])[1], (tRange[1] - tRange[0]) / (1 - tRange[0]))[0];
}
exports.bezierFromBezierPiece = bezierFromBezierPiece;
//# sourceMappingURL=bezier-from-bezier-piece.js.map