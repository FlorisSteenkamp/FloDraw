import { bezier } from './bezier.js';

const COLORS = ['red', 'green', 'cyan', 'blue'];


/**
 * Draws beziers.
 * @param snap 
 * @param beziers 
 * @param delay 
 */
function beziers(
        g        : SVGGElement,
        beziers  : number[][][],
        classes? : string,
        delay?   : number) {

    const alternateColors = classes === undefined;

    const $beziers: SVGElement[] = [];

    for (let i=0; i<beziers.length; i++) {
        const ps = beziers[i];
        const color = COLORS[i % COLORS.length];
        const class_ = alternateColors
            ? 'thin5 nofill ' + color
            : classes;

        $beziers.push(...bezier(g, ps, class_));
    }

    if (delay) { 
        setTimeout(() => $beziers.forEach(e => e.remove()), delay); 
    }

    return $beziers;
}


export { beziers }
