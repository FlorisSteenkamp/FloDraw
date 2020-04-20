"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const xmlns_1 = require("./xmlns");
/**
 * Draws text
 * @param g a SVG group element wherein to draw
 * @param p
 * @param str
 * @param fontSize
 * @param classes
 * @param delay
 */
function text(g, p, str, fontSize, classes = default_class_1.DEFAULT_CLASS, delay) {
    let $text = document.createElementNS(xmlns_1.XMLNS, 'text');
    $text.setAttributeNS(null, "x", p[0].toString());
    $text.setAttributeNS(null, "y", p[1].toString());
    $text.setAttributeNS(null, "font-size", fontSize.toString());
    $text.setAttributeNS(null, "class", classes);
    $text.textContent = str;
    g.appendChild($text);
    if (delay) {
        setTimeout(() => $text.remove(), delay);
    }
    return [$text];
}
exports.text = text;
//# sourceMappingURL=text.js.map