import { DEFAULT_CLASS } from './default-class.js';
import { crossHair } from './cross-hair.js';
import { bezier } from './bezier.js';
import { evaluateBezier } from './evaluate-bezier.js';
import { bezierFromBezierPiece } from './bezier-from-bezier-piece.js';
/**
 * Draws a bezier piece, i.e. a bezier within a specified t range.
 * @param snap
 * @param bezierPiece
 * @param class
 * @param delay
 */
function bezierPiece(g, ps_, tRange, class_ = DEFAULT_CLASS, delay) {
    let $elems = [];
    // Draw crosshair if t range bounds are equal.
    if (tRange[0] === tRange[1]) {
        let p = evaluateBezier(ps_, tRange[0]);
        $elems = crossHair(g, p, class_, 1.5);
    }
    else {
        let ps = bezierFromBezierPiece(ps_, tRange);
        $elems = bezier(g, ps, class_);
    }
    if (delay) {
        setTimeout(() => $elems.forEach(e => e.remove()), delay);
    }
    return $elems;
}
export { bezierPiece };
//# sourceMappingURL=bezier-piece.js.map