"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
/**
 * Draws a dot.
 */
function dot(g, p, r = 3, color = 'red', delay) {
    let [$dot] = circle_1.circle(g, { center: p, radius: r }, 'dot ' + color, delay);
    if (delay) {
        setTimeout(() => $dot.remove(), delay);
    }
    return [$dot];
}
exports.dot = dot;
//# sourceMappingURL=dot.js.map