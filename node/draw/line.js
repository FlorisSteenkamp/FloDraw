import { DEFAULT_CLASS } from './default-class.js';
import { XMLNS } from './xmlns.js';
/**
 *
 * @param snap
 * @param l
 * @param classes
 */
function line(g, l, classes = DEFAULT_CLASS, delay) {
    let $line = document.createElementNS(XMLNS, 'line');
    $line.setAttributeNS(null, "x1", l[0][0].toString());
    $line.setAttributeNS(null, "y1", l[0][1].toString());
    $line.setAttributeNS(null, "x2", l[1][0].toString());
    $line.setAttributeNS(null, "y2", l[1][1].toString());
    $line.setAttributeNS(null, "class", classes);
    g.appendChild($line);
    if (delay) {
        setTimeout(() => $line.remove(), delay);
    }
    return [$line];
}
export { line };
//# sourceMappingURL=line.js.map