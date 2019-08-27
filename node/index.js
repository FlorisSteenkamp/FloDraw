"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./draw/circle");
const cross_hair_1 = require("./draw/cross-hair");
const dot_1 = require("./draw/dot");
const line_1 = require("./draw/line");
const rect_1 = require("./draw/rect");
const polygon_1 = require("./draw/polygon");
const loop_1 = require("./draw/loop");
const polyline_1 = require("./draw/polyline");
const beziers_1 = require("./draw/beziers");
const cubic_bezier_1 = require("./draw/cubic-bezier");
const bezier_1 = require("./draw/bezier");
const bezier_piece_1 = require("./draw/bezier-piece");
const quad_bezier_1 = require("./draw/quad-bezier");
let drawFs = {
    circle: circle_1.circle,
    crossHair: cross_hair_1.crossHair,
    dot: dot_1.dot,
    line: line_1.line,
    rect: rect_1.rect,
    beziers: beziers_1.beziers,
    bezier: bezier_1.bezier,
    bezierPiece: bezier_piece_1.bezierPiece,
    quadBezier: quad_bezier_1.quadBezier,
    cubicBezier: cubic_bezier_1.cubicBezier,
    polygon: polygon_1.polygon,
    loop: loop_1.loop,
    polyline: polyline_1.polyline
};
exports.drawFs = drawFs;
//# sourceMappingURL=index.js.map