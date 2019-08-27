"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
function rect(g, rect, classes = default_class_1.DEFAULT_CLASS, delay) {
    let $rect = document.createElementNS(xmlns_1.XMLNS, 'rect');
    $rect.setAttributeNS(null, "x", rect[0][0].toString());
    $rect.setAttributeNS(null, "y", rect[0][1].toString());
    $rect.setAttributeNS(null, "width", (rect[1][0] - rect[0][0]).toString());
    $rect.setAttributeNS(null, "height", (rect[1][1] - rect[0][1]).toString());
    if (classes) {
        $rect.setAttributeNS(null, "class", classes);
    }
    g.appendChild($rect);
    if (delay) {
        setTimeout(() => $rect.remove(), delay);
    }
    return [$rect];
}
exports.rect = rect;
//# sourceMappingURL=rect.js.map