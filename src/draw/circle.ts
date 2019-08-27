
import { DEFAULT_CLASS } from './default-class';
import { XMLNS } from './xmlns';


/**
 * Draws a circle
 * @param g An SVG group element wherein to draw the circle.
 * @param circle 
 * @param classes 
 * @param delay 
 */
function circle(
        g       : SVGGElement, 
        circle  : { radius: number, center: number[] }, 
        classes = DEFAULT_CLASS,
        delay?  : number) {

    let c = circle.center;
    let r = circle.radius;

    let $circle = document.createElementNS(XMLNS, 'circle');
    $circle.setAttributeNS(null, "cx", c[0].toString());
    $circle.setAttributeNS(null, "cy", c[1].toString());
    $circle.setAttributeNS(null, "r", r.toString());
    $circle.setAttributeNS(null, "class", classes); 

    g.appendChild($circle);

    if (delay) { setTimeout(() => $circle.remove(), delay); }

    return [$circle];
}


export { circle }
