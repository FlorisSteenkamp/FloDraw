import { DEFAULT_CLASS } from './default-class.js';
import { dot } from './dot.js';
import { line } from './line.js';
import { XMLNS } from './xmlns.js';


function quadBezier(
        g: SVGGElement,
        ps: number[][], 
        class_: string = DEFAULT_CLASS,
        delay = 0,
        controlPointClass: string | undefined = undefined,
        controlPointRadius = 0,
        lineCLass: string | undefined = undefined) {


    const [[x0,y0],[x1,y1],[x2,y2]] = ps;

    const $path = document.createElementNS(XMLNS, 'path');
    $path.setAttributeNS(
        null, 
        "d", 
        `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`
    );
    if (class_) { $path.setAttributeNS(null, "class", class_); }

    let $dots: SVGCircleElement[] = [];
    if (controlPointClass !== undefined) {
        for (const p of ps) {
            $dots.push(...dot(g, p, controlPointRadius, controlPointClass, delay));
        }
    }

    let $lines: SVGElement[] = [];
    if (lineCLass !== undefined) {
        for (let i=0; i<ps.length-1; i++) {
            $lines.push(...line(g, [ps[i],ps[i+1]], lineCLass, delay));
        }
    }

    const $svgs = [$path, ...$dots, ...$lines];

    for (const $ of $svgs) { g.appendChild($); }
    if (delay) {
        setTimeout(() => { for (const $ of $svgs) { $.remove(); } }, delay);
    }

    return $svgs;
}


export { quadBezier }
