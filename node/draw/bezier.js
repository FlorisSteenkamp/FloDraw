"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_class_1 = require("./default-class");
const line_1 = require("./line");
const quad_bezier_1 = require("./quad-bezier");
const cubic_bezier_1 = require("./cubic-bezier");
function bezier(g, bezier, class_ = default_class_1.DEFAULT_CLASS, delay) {
    if (bezier.length === 2) {
        return line_1.line(g, bezier, class_, delay);
    }
    else if (bezier.length === 3) {
        return quad_bezier_1.quadBezier(g, bezier, class_, delay);
    }
    else if (bezier.length === 4) {
        return cubic_bezier_1.cubicBezier(g, bezier, class_, delay);
    }
    return [];
}
exports.bezier = bezier;
//# sourceMappingURL=bezier.js.map