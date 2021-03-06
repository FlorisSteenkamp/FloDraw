"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an estimate of evaluating the given bezier at the given t value.
 * @param ps An order 1, 2 or bezier
 * @param t The parameter ∈ [0,1]
 */
function evaluateBezier(ps, t) {
    let s = 1 - t;
    if (ps.length === 4) {
        // cubic
        let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        let x = x0 * Math.pow(s, 3) + 3 * x1 * Math.pow(s, 2) * t + 3 * x2 * s * Math.pow(t, 2) + x3 * Math.pow(t, 3);
        let y = y0 * Math.pow(s, 3) + 3 * y1 * Math.pow(s, 2) * t + 3 * y2 * s * Math.pow(t, 2) + y3 * Math.pow(t, 3);
        return [x, y];
    }
    if (ps.length === 3) {
        // quadratic
        let [[x0, y0], [x1, y1], [x2, y2]] = ps;
        let x = x0 * Math.pow(s, 2) + 2 * x1 * s * t + x2 * Math.pow(t, 2);
        let y = y0 * Math.pow(s, 2) + 2 * y1 * s * t + y2 * Math.pow(t, 2);
        return [x, y];
    }
    if (ps.length === 2) {
        // line
        let [[x0, y0], [x1, y1]] = ps;
        let x = x0 * s + x1 * t;
        let y = y0 * s + y1 * t;
        return [x, y];
    }
    return [NaN, NaN];
}
exports.evaluateBezier = evaluateBezier;
//# sourceMappingURL=evaluate-bezier.js.map