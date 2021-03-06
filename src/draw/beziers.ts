
import { bezier } from './bezier';

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

    let alternateColors = classes === undefined;

    let $beziers: SVGElement[] = [];

    for (let i=0; i<beziers.length; i++) {
        let ps = beziers[i];
        let color = COLORS[i % COLORS.length];
        let class_ = alternateColors
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
