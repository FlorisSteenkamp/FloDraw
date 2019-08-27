
import { DEFAULT_CLASS } from './default-class';
import { XMLNS } from './xmlns';

function rect(
        g       : SVGGElement,
        rect    : number[][],
        classes = DEFAULT_CLASS,
        delay?  : number) {

    let $rect = document.createElementNS(XMLNS, 'rect');
    $rect.setAttributeNS(null, "x", rect[0][0].toString());
    $rect.setAttributeNS(null, "y", rect[0][1].toString());
    $rect.setAttributeNS(null, "width",  (rect[1][0] - rect[0][0]).toString());
    $rect.setAttributeNS(null, "height", (rect[1][1] - rect[0][1]).toString());
    if (classes) { $rect.setAttributeNS(null, "class", classes); }

    g.appendChild($rect);

    if (delay) { setTimeout(() => $rect.remove(), delay); }

    return [$rect];
}


export { rect }
