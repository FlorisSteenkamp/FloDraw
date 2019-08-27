"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
/**
 *
 * @param snap
 * @param l
 * @param classes
 */
function line(g, l, classes = default_class_1.DEFAULT_CLASS, delay) {
    let $line = document.createElementNS(xmlns_1.XMLNS, 'line');
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
exports.line = line;
//# sourceMappingURL=line.js.map