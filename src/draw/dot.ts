import { circle } from "./circle.js";


/**
 * Draws a dot. 
 */
function dot(
        g      : SVGGElement,
        p      : number[], 
        r      = 3, 
        color  = 'red',
        delay? : number) {

    let [$dot] = circle(g, { center: p, radius: r }, 'dot ' + color, delay);

    if (delay) { 
        setTimeout(() => $dot.remove(), delay); 
    }

    return [$dot];
}


export { dot }
