"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const cross_hair_1 = require("./cross-hair");
const bezier_1 = require("./bezier");
const evaluate_bezier_1 = require("./evaluate-bezier");
const bezier_from_bezier_piece_1 = require("./bezier-from-bezier-piece");
/**
 * Draws a bezier piece, i.e. a bezier within a specified t range.
 * @param snap
 * @param bezierPiece
 * @param class
 * @param delay
 */
function bezierPiece(g, ps_, tRange, class_ = default_class_1.DEFAULT_CLASS, delay) {
    let $elems = [];
    // Draw crosshair if t range bounds are equal.
    if (tRange[0] === tRange[1]) {
        let p = evaluate_bezier_1.evaluateBezier(ps_, tRange[0]);
        $elems = cross_hair_1.crossHair(g, p, class_, 1.5);
    }
    else {
        let ps = bezier_from_bezier_piece_1.bezierFromBezierPiece(ps_, tRange);
        $elems = bezier_1.bezier(g, ps, class_);
    }
    if (delay) {
        setTimeout(() => $elems.forEach(e => e.remove()), delay);
    }
    return $elems;
}
exports.bezierPiece = bezierPiece;
//# sourceMappingURL=bezier-piece.js.map