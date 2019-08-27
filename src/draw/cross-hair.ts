
import { DEFAULT_CLASS } from './default-class';
import { circle } from './circle';
import { line   } from './line';


/**
 * Draws a crosshair.
 */
function crossHair(
        g       : SVGGElement,
        p       : number[], 
        classes : string = DEFAULT_CLASS, 
        r       : number = 3 ,
        delay?  : number): SVGElement[] {

    let circle_ = { center: p, radius: r };
    let $circle = circle(g, circle_, classes);

    let l1 = [[p[0]-r, p[1]], [p[0]+r, p[1]]];
    let l2 = [[p[0], p[1]-r], [p[0], p[1]+r]];
    let $l1 = line(g, l1, classes);
    let $l2 = line(g, l2, classes);

    if (delay) { 
        setTimeout(() => {
            $circle.forEach(e => e.remove());
            $l1    .forEach(e => e.remove());
            $l2    .forEach(e => e.remove());
        }, delay); 
    }

    return [...$circle, ...$l1, ...$l2];
}


export { crossHair }
