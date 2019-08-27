
import { DEFAULT_CLASS } from './default-class';
import { crossHair } from './cross-hair';
import { bezier } from './bezier';
import { evaluateBezier } from './evaluate-bezier';
import { bezierFromBezierPiece } from './bezier-from-bezier-piece';


/**
 * Draws a bezier piece, i.e. a bezier within a specified t range.
 * @param snap 
 * @param bezierPiece 
 * @param class 
 * @param delay 
 */
function bezierPiece(
        g      : SVGGElement,
        ps_    : number[][],
        tRange : number[],
        class_ : string = DEFAULT_CLASS,
        delay? : number) {

    let $elems: SVGElement[] = [];

    // Draw crosshair if t range bounds are equal.
    if (tRange[0] === tRange[1]) {
        let p = evaluateBezier(ps_, tRange[0]);
        $elems = crossHair(g, p, class_, 1.5);
    } else {
        let ps = bezierFromBezierPiece(ps_, tRange);
        $elems = bezier(g, ps, class_);
    }

    if (delay) { 
        setTimeout(() => $elems.forEach(e => e.remove()), delay);
    }

    return $elems;
}


export { bezierPiece }
