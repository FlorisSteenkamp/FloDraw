import { DEFAULT_CLASS } from "./default-class.js";
import { line } from "./line.js";
import { quadBezier } from "./quad-bezier.js";
import { cubicBezier } from "./cubic-bezier.js";


function bezier(
        g      : SVGGElement,
        bezier : number[][], 
        class_ = DEFAULT_CLASS,
        delay? : number) {

    if (bezier.length === 2) {
        return line(g, bezier, class_, delay);
    } else if (bezier.length === 3) {
        return quadBezier(g, bezier, class_, delay);
    } else if (bezier.length === 4) {
        return cubicBezier(g, bezier, class_, delay);
    }

    return [];
}


export { bezier }
