/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var FloDraw;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/debug/debug.ts":
/*!****************************!*\
  !*** ./src/debug/debug.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableDebugDrawFs\": () => (/* binding */ enableDebugDrawFs)\n/* harmony export */ });\n/* harmony import */ var _draw_fs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw-fs.js */ \"./src/draw-fs.ts\");\n\r\n/**\r\n * Returns a new debug object by spreading boolean operation debug information\r\n * onto the given (possibly undefined) debug object.\r\n * @param debugOn a (possibly undefined) debug object\r\n */\r\nfunction enableDebugDrawFs(debugOn) {\r\n    if (!debugOn) {\r\n        return;\r\n    }\r\n    let debug = window._debug_;\r\n    debug = {\r\n        ...debug,\r\n        fs: {\r\n            ...debug?.fs,\r\n            draw: {\r\n                ..._draw_fs_js__WEBPACK_IMPORTED_MODULE_0__.drawFs\r\n            }\r\n        }\r\n    };\r\n    window._debug_ = debug;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/debug/debug.ts?");

/***/ }),

/***/ "./src/draw-fs.ts":
/*!************************!*\
  !*** ./src/draw-fs.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawFs\": () => (/* binding */ drawFs)\n/* harmony export */ });\n/* harmony import */ var _draw_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw/circle.js */ \"./src/draw/circle.ts\");\n/* harmony import */ var _draw_cross_hair_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw/cross-hair.js */ \"./src/draw/cross-hair.ts\");\n/* harmony import */ var _draw_dot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw/dot.js */ \"./src/draw/dot.ts\");\n/* harmony import */ var _draw_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw/line.js */ \"./src/draw/line.ts\");\n/* harmony import */ var _draw_rect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw/rect.js */ \"./src/draw/rect.ts\");\n/* harmony import */ var _draw_polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw/polygon.js */ \"./src/draw/polygon.ts\");\n/* harmony import */ var _draw_loop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw/loop.js */ \"./src/draw/loop.ts\");\n/* harmony import */ var _draw_polyline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draw/polyline.js */ \"./src/draw/polyline.ts\");\n/* harmony import */ var _draw_beziers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draw/beziers.js */ \"./src/draw/beziers.ts\");\n/* harmony import */ var _draw_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw/cubic-bezier.js */ \"./src/draw/cubic-bezier.ts\");\n/* harmony import */ var _draw_bezier_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./draw/bezier.js */ \"./src/draw/bezier.ts\");\n/* harmony import */ var _draw_bezier_piece_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./draw/bezier-piece.js */ \"./src/draw/bezier-piece.ts\");\n/* harmony import */ var _draw_quad_bezier_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./draw/quad-bezier.js */ \"./src/draw/quad-bezier.ts\");\n/* harmony import */ var _draw_text_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./draw/text.js */ \"./src/draw/text.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet drawFs = {\r\n    circle: _draw_circle_js__WEBPACK_IMPORTED_MODULE_0__.circle,\r\n    crossHair: _draw_cross_hair_js__WEBPACK_IMPORTED_MODULE_1__.crossHair,\r\n    dot: _draw_dot_js__WEBPACK_IMPORTED_MODULE_2__.dot,\r\n    line: _draw_line_js__WEBPACK_IMPORTED_MODULE_3__.line,\r\n    rect: _draw_rect_js__WEBPACK_IMPORTED_MODULE_4__.rect,\r\n    beziers: _draw_beziers_js__WEBPACK_IMPORTED_MODULE_8__.beziers,\r\n    bezier: _draw_bezier_js__WEBPACK_IMPORTED_MODULE_10__.bezier,\r\n    bezierPiece: _draw_bezier_piece_js__WEBPACK_IMPORTED_MODULE_11__.bezierPiece,\r\n    quadBezier: _draw_quad_bezier_js__WEBPACK_IMPORTED_MODULE_12__.quadBezier,\r\n    cubicBezier: _draw_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_9__.cubicBezier,\r\n    polygon: _draw_polygon_js__WEBPACK_IMPORTED_MODULE_5__.polygon,\r\n    loop: _draw_loop_js__WEBPACK_IMPORTED_MODULE_6__.loop,\r\n    polyline: _draw_polyline_js__WEBPACK_IMPORTED_MODULE_7__.polyline,\r\n    text: _draw_text_js__WEBPACK_IMPORTED_MODULE_13__.text\r\n};\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw-fs.ts?");

/***/ }),

/***/ "./src/draw/bezier-from-bezier-piece.ts":
/*!**********************************************!*\
  !*** ./src/draw/bezier-from-bezier-piece.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bezierFromBezierPiece\": () => (/* binding */ bezierFromBezierPiece)\n/* harmony export */ });\n/* harmony import */ var _evaluate_bezier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluate-bezier.js */ \"./src/draw/evaluate-bezier.ts\");\n/* harmony import */ var _split_at_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-at.js */ \"./src/draw/split-at.ts\");\n\r\n\r\n/**\r\n * Returns a new bezier from the given bezier by limiting its t range.\r\n *\r\n * Duplicated here so we don't circularly depend on flo-bezier.\r\n *\r\n * Uses de Casteljau's algorithm.\r\n *\r\n * @param ps a bezier\r\n * @param tRange a t range\r\n */\r\nfunction bezierFromBezierPiece(ps, tRange) {\r\n    // If tRange = [0,1] then return original bezier.\r\n    if (tRange[0] === 0 && tRange[1] === 1) {\r\n        return ps;\r\n    }\r\n    // If tRange[0] === tRange[1] then return a single point degenerated bezier.\r\n    if (tRange[0] === tRange[1]) {\r\n        let p = (0,_evaluate_bezier_js__WEBPACK_IMPORTED_MODULE_0__.evaluateBezier)(ps, tRange[0]);\r\n        return [p, p, p, p];\r\n    }\r\n    if (tRange[0] === 0) {\r\n        return (0,_split_at_js__WEBPACK_IMPORTED_MODULE_1__.splitAt)(ps, tRange[1])[0];\r\n    }\r\n    if (tRange[1] === 1) {\r\n        return (0,_split_at_js__WEBPACK_IMPORTED_MODULE_1__.splitAt)(ps, tRange[0])[1];\r\n    }\r\n    // At this stage we know the t range is not degenerate and tRange[0] !== 0 \r\n    // and tRange[1] !== 1\r\n    return (0,_split_at_js__WEBPACK_IMPORTED_MODULE_1__.splitAt)((0,_split_at_js__WEBPACK_IMPORTED_MODULE_1__.splitAt)(ps, tRange[0])[1], (tRange[1] - tRange[0]) / (1 - tRange[0]))[0];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/bezier-from-bezier-piece.ts?");

/***/ }),

/***/ "./src/draw/bezier-piece.ts":
/*!**********************************!*\
  !*** ./src/draw/bezier-piece.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bezierPiece\": () => (/* binding */ bezierPiece)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _cross_hair_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cross-hair.js */ \"./src/draw/cross-hair.ts\");\n/* harmony import */ var _bezier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bezier.js */ \"./src/draw/bezier.ts\");\n/* harmony import */ var _evaluate_bezier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluate-bezier.js */ \"./src/draw/evaluate-bezier.ts\");\n/* harmony import */ var _bezier_from_bezier_piece_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bezier-from-bezier-piece.js */ \"./src/draw/bezier-from-bezier-piece.ts\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Draws a bezier piece, i.e. a bezier within a specified t range.\r\n * @param snap\r\n * @param bezierPiece\r\n * @param class\r\n * @param delay\r\n */\r\nfunction bezierPiece(g, ps_, tRange, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let $elems = [];\r\n    // Draw crosshair if t range bounds are equal.\r\n    if (tRange[0] === tRange[1]) {\r\n        let p = (0,_evaluate_bezier_js__WEBPACK_IMPORTED_MODULE_3__.evaluateBezier)(ps_, tRange[0]);\r\n        $elems = (0,_cross_hair_js__WEBPACK_IMPORTED_MODULE_1__.crossHair)(g, p, class_, 1.5);\r\n    }\r\n    else {\r\n        let ps = (0,_bezier_from_bezier_piece_js__WEBPACK_IMPORTED_MODULE_4__.bezierFromBezierPiece)(ps_, tRange);\r\n        $elems = (0,_bezier_js__WEBPACK_IMPORTED_MODULE_2__.bezier)(g, ps, class_);\r\n    }\r\n    if (delay) {\r\n        setTimeout(() => $elems.forEach(e => e.remove()), delay);\r\n    }\r\n    return $elems;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/bezier-piece.ts?");

/***/ }),

/***/ "./src/draw/bezier.ts":
/*!****************************!*\
  !*** ./src/draw/bezier.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bezier\": () => (/* binding */ bezier)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.js */ \"./src/draw/line.ts\");\n/* harmony import */ var _quad_bezier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quad-bezier.js */ \"./src/draw/quad-bezier.ts\");\n/* harmony import */ var _cubic_bezier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier.js */ \"./src/draw/cubic-bezier.ts\");\n\r\n\r\n\r\n\r\nfunction bezier(g, bezier, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    if (bezier.length === 2) {\r\n        return (0,_line_js__WEBPACK_IMPORTED_MODULE_1__.line)(g, bezier, class_, delay);\r\n    }\r\n    else if (bezier.length === 3) {\r\n        return (0,_quad_bezier_js__WEBPACK_IMPORTED_MODULE_2__.quadBezier)(g, bezier, class_, delay);\r\n    }\r\n    else if (bezier.length === 4) {\r\n        return (0,_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_3__.cubicBezier)(g, bezier, class_, delay);\r\n    }\r\n    return [];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/bezier.ts?");

/***/ }),

/***/ "./src/draw/beziers.ts":
/*!*****************************!*\
  !*** ./src/draw/beziers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"beziers\": () => (/* binding */ beziers)\n/* harmony export */ });\n/* harmony import */ var _bezier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier.js */ \"./src/draw/bezier.ts\");\n\r\nconst COLORS = ['red', 'green', 'cyan', 'blue'];\r\n/**\r\n * Draws beziers.\r\n * @param snap\r\n * @param beziers\r\n * @param delay\r\n */\r\nfunction beziers(g, beziers, classes, delay) {\r\n    let alternateColors = classes === undefined;\r\n    let $beziers = [];\r\n    for (let i = 0; i < beziers.length; i++) {\r\n        let ps = beziers[i];\r\n        let color = COLORS[i % COLORS.length];\r\n        let class_ = alternateColors\r\n            ? 'thin5 nofill ' + color\r\n            : classes;\r\n        $beziers.push(...(0,_bezier_js__WEBPACK_IMPORTED_MODULE_0__.bezier)(g, ps, class_));\r\n    }\r\n    if (delay) {\r\n        setTimeout(() => $beziers.forEach(e => e.remove()), delay);\r\n    }\r\n    return $beziers;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/beziers.ts?");

/***/ }),

/***/ "./src/draw/circle.ts":
/*!****************************!*\
  !*** ./src/draw/circle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"circle\": () => (/* binding */ circle)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\n/**\r\n * Draws a circle\r\n * @param g An SVG group element wherein to draw the circle.\r\n * @param circle\r\n * @param classes\r\n * @param delay\r\n */\r\nfunction circle(g, circle, classes = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let c = circle.center;\r\n    let r = circle.radius;\r\n    let $circle = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'circle');\r\n    $circle.setAttributeNS(null, \"cx\", c[0].toString());\r\n    $circle.setAttributeNS(null, \"cy\", c[1].toString());\r\n    $circle.setAttributeNS(null, \"r\", r.toString());\r\n    $circle.setAttributeNS(null, \"class\", classes);\r\n    g.appendChild($circle);\r\n    if (delay) {\r\n        setTimeout(() => $circle.remove(), delay);\r\n    }\r\n    return [$circle];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/circle.ts?");

/***/ }),

/***/ "./src/draw/cross-hair.ts":
/*!********************************!*\
  !*** ./src/draw/cross-hair.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crossHair\": () => (/* binding */ crossHair)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle.js */ \"./src/draw/circle.ts\");\n/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.js */ \"./src/draw/line.ts\");\n\r\n\r\n\r\n/**\r\n * Draws a crosshair.\r\n */\r\nfunction crossHair(g, p, classes = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, r = 3, delay) {\r\n    let circle_ = { center: p, radius: r };\r\n    let $circle = (0,_circle_js__WEBPACK_IMPORTED_MODULE_1__.circle)(g, circle_, classes);\r\n    let l1 = [[p[0] - r, p[1]], [p[0] + r, p[1]]];\r\n    let l2 = [[p[0], p[1] - r], [p[0], p[1] + r]];\r\n    let $l1 = (0,_line_js__WEBPACK_IMPORTED_MODULE_2__.line)(g, l1, classes);\r\n    let $l2 = (0,_line_js__WEBPACK_IMPORTED_MODULE_2__.line)(g, l2, classes);\r\n    if (delay) {\r\n        setTimeout(() => {\r\n            $circle.forEach(e => e.remove());\r\n            $l1.forEach(e => e.remove());\r\n            $l2.forEach(e => e.remove());\r\n        }, delay);\r\n    }\r\n    return [...$circle, ...$l1, ...$l2];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/cross-hair.ts?");

/***/ }),

/***/ "./src/draw/cubic-bezier.ts":
/*!**********************************!*\
  !*** ./src/draw/cubic-bezier.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cubicBezier\": () => (/* binding */ cubicBezier)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n/* harmony import */ var _cross_hair_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cross-hair.js */ \"./src/draw/cross-hair.ts\");\n\r\n\r\n\r\nfunction cubicBezier(g, bezier, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = bezier;\r\n    if (x0 === x3 && x1 === x3 && x2 === x3 &&\r\n        y0 === y3 && y1 === y3 && y2 === y3) {\r\n        return (0,_cross_hair_js__WEBPACK_IMPORTED_MODULE_2__.crossHair)(g, [x0, y0], class_, 0.2, delay);\r\n    }\r\n    let $path = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'path');\r\n    $path.setAttributeNS(null, \"d\", `M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);\r\n    $path.setAttributeNS(null, \"class\", class_);\r\n    g.appendChild($path);\r\n    if (delay) {\r\n        setTimeout(() => $path.remove(), delay);\r\n    }\r\n    return [$path];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/cubic-bezier.ts?");

/***/ }),

/***/ "./src/draw/default-class.ts":
/*!***********************************!*\
  !*** ./src/draw/default-class.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_CLASS\": () => (/* binding */ DEFAULT_CLASS)\n/* harmony export */ });\nconst DEFAULT_CLASS = 'red thin10 nofill ';\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/default-class.ts?");

/***/ }),

/***/ "./src/draw/dot.ts":
/*!*************************!*\
  !*** ./src/draw/dot.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dot\": () => (/* binding */ dot)\n/* harmony export */ });\n/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.js */ \"./src/draw/circle.ts\");\n\r\n/**\r\n * Draws a dot.\r\n */\r\nfunction dot(g, p, r = 3, color = 'red', delay) {\r\n    let [$dot] = (0,_circle_js__WEBPACK_IMPORTED_MODULE_0__.circle)(g, { center: p, radius: r }, 'dot ' + color, delay);\r\n    if (delay) {\r\n        setTimeout(() => $dot.remove(), delay);\r\n    }\r\n    return [$dot];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/dot.ts?");

/***/ }),

/***/ "./src/draw/evaluate-bezier.ts":
/*!*************************************!*\
  !*** ./src/draw/evaluate-bezier.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"evaluateBezier\": () => (/* binding */ evaluateBezier)\n/* harmony export */ });\n/**\r\n * Returns an estimate of evaluating the given bezier at the given t value.\r\n * @param ps An order 1, 2 or bezier\r\n * @param t The parameter ∈ [0,1]\r\n */\r\nfunction evaluateBezier(ps, t) {\r\n    let s = 1 - t;\r\n    if (ps.length === 4) {\r\n        // cubic\r\n        let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;\r\n        let x = x0 * s ** 3 + 3 * x1 * s ** 2 * t + 3 * x2 * s * t ** 2 + x3 * t ** 3;\r\n        let y = y0 * s ** 3 + 3 * y1 * s ** 2 * t + 3 * y2 * s * t ** 2 + y3 * t ** 3;\r\n        return [x, y];\r\n    }\r\n    if (ps.length === 3) {\r\n        // quadratic\r\n        let [[x0, y0], [x1, y1], [x2, y2]] = ps;\r\n        let x = x0 * s ** 2 + 2 * x1 * s * t + x2 * t ** 2;\r\n        let y = y0 * s ** 2 + 2 * y1 * s * t + y2 * t ** 2;\r\n        return [x, y];\r\n    }\r\n    if (ps.length === 2) {\r\n        // line\r\n        let [[x0, y0], [x1, y1]] = ps;\r\n        let x = x0 * s + x1 * t;\r\n        let y = y0 * s + y1 * t;\r\n        return [x, y];\r\n    }\r\n    return [NaN, NaN];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/evaluate-bezier.ts?");

/***/ }),

/***/ "./src/draw/line.ts":
/*!**************************!*\
  !*** ./src/draw/line.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"line\": () => (/* binding */ line)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\n/**\r\n *\r\n * @param snap\r\n * @param l\r\n * @param classes\r\n */\r\nfunction line(g, l, classes = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let $line = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'line');\r\n    $line.setAttributeNS(null, \"x1\", l[0][0].toString());\r\n    $line.setAttributeNS(null, \"y1\", l[0][1].toString());\r\n    $line.setAttributeNS(null, \"x2\", l[1][0].toString());\r\n    $line.setAttributeNS(null, \"y2\", l[1][1].toString());\r\n    $line.setAttributeNS(null, \"class\", classes);\r\n    g.appendChild($line);\r\n    if (delay) {\r\n        setTimeout(() => $line.remove(), delay);\r\n    }\r\n    return [$line];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/line.ts?");

/***/ }),

/***/ "./src/draw/loop.ts":
/*!**************************!*\
  !*** ./src/draw/loop.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loop\": () => (/* binding */ loop)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\nfunction loop(g, curves, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    if (!curves.length) {\r\n        return [];\r\n    }\r\n    let $path = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'path');\r\n    let d = `M${curves[0][0][0]} ${curves[0][0][1]} `;\r\n    for (let i = 0; i < curves.length; i++) {\r\n        let curve = curves[i];\r\n        d += `${getType(curve.length)} `;\r\n        for (let j = 1; j < curve.length; j++) {\r\n            d += `${curve[j][0]} ${curve[j][1]} `;\r\n        }\r\n    }\r\n    d += ' z';\r\n    $path.setAttributeNS(null, \"d\", d);\r\n    if (class_) {\r\n        $path.setAttributeNS(null, \"class\", class_);\r\n    }\r\n    g.appendChild($path);\r\n    if (delay) {\r\n        setTimeout(() => $path.remove(), delay);\r\n    }\r\n    return [$path];\r\n}\r\nfunction getType(len) {\r\n    if (len === 2) {\r\n        return 'L';\r\n    }\r\n    if (len === 3) {\r\n        return 'Q';\r\n    }\r\n    if (len === 4) {\r\n        return 'C';\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/loop.ts?");

/***/ }),

/***/ "./src/draw/polygon.ts":
/*!*****************************!*\
  !*** ./src/draw/polygon.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polygon\": () => (/* binding */ polygon)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\n/**\r\n * Draws a polygon\r\n * @param g\r\n * @param poly the polygon specified as an array of points - the last point does\r\n * not have to be specified\r\n * @param class_\r\n * @param delay\r\n */\r\nfunction polygon(g, poly, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let $path = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'path');\r\n    let d = `M${poly[0][0]} ${poly[0][1]} L`;\r\n    for (let i = 0; i < poly.length; i++) {\r\n        d += `${poly[i][0]} ${poly[i][1]} `;\r\n    }\r\n    d += ' z';\r\n    $path.setAttributeNS(null, \"d\", d);\r\n    if (class_) {\r\n        $path.setAttributeNS(null, \"class\", class_);\r\n    }\r\n    g.appendChild($path);\r\n    if (delay) {\r\n        setTimeout(() => $path.remove(), delay);\r\n    }\r\n    return [$path];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/polygon.ts?");

/***/ }),

/***/ "./src/draw/polyline.ts":
/*!******************************!*\
  !*** ./src/draw/polyline.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polyline\": () => (/* binding */ polyline)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\nfunction polyline(g, poly, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    if (poly.length < 2) {\r\n        return [];\r\n    }\r\n    let $path = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'path');\r\n    let d = `M${poly[0][0]} ${poly[0][1]} L`;\r\n    for (let i = 0; i < poly.length; i++) {\r\n        d += `${poly[i][0]} ${poly[i][1]} `;\r\n    }\r\n    $path.setAttributeNS(null, \"d\", d);\r\n    if (class_) {\r\n        $path.setAttributeNS(null, \"class\", class_);\r\n    }\r\n    g.appendChild($path);\r\n    if (delay) {\r\n        setTimeout(() => $path.remove(), delay);\r\n    }\r\n    return [$path];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/polyline.ts?");

/***/ }),

/***/ "./src/draw/quad-bezier.ts":
/*!*********************************!*\
  !*** ./src/draw/quad-bezier.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"quadBezier\": () => (/* binding */ quadBezier)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\nfunction quadBezier(g, ps, class_ = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let [[x0, y0], [x1, y1], [x2, y2]] = ps;\r\n    let $path = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'path');\r\n    $path.setAttributeNS(null, \"d\", `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`);\r\n    if (class_) {\r\n        $path.setAttributeNS(null, \"class\", class_);\r\n    }\r\n    g.appendChild($path);\r\n    if (delay) {\r\n        setTimeout(() => $path.remove(), delay);\r\n    }\r\n    return [$path];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/quad-bezier.ts?");

/***/ }),

/***/ "./src/draw/rect.ts":
/*!**************************!*\
  !*** ./src/draw/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rect\": () => (/* binding */ rect)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\nfunction rect(g, rect, classes = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let [[x0, y0], [x1, y1]] = rect;\r\n    let x = x0 < x1 ? x0 : x1;\r\n    let y = y0 < y1 ? y0 : y1;\r\n    let width = Math.abs(x0 - x1);\r\n    let height = Math.abs(y0 - y1);\r\n    let $rect = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'rect');\r\n    $rect.setAttributeNS(null, \"x\", x.toString());\r\n    $rect.setAttributeNS(null, \"y\", y.toString());\r\n    $rect.setAttributeNS(null, \"width\", width.toString());\r\n    $rect.setAttributeNS(null, \"height\", height.toString());\r\n    if (classes) {\r\n        $rect.setAttributeNS(null, \"class\", classes);\r\n    }\r\n    g.appendChild($rect);\r\n    if (delay) {\r\n        setTimeout(() => $rect.remove(), delay);\r\n    }\r\n    return [$rect];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/rect.ts?");

/***/ }),

/***/ "./src/draw/split-at.ts":
/*!******************************!*\
  !*** ./src/draw/split-at.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"splitAt\": () => (/* binding */ splitAt)\n/* harmony export */ });\n/**\r\n * Returns 2 new beziers split at the given t parameter, i.e. for the ranges\r\n * [0,t] and [t,1].\r\n * @param ps\r\n * @param t\r\n */\r\nfunction splitAt(ps, t) {\r\n    if (ps.length === 2) {\r\n        return splitLineAt(ps, t);\r\n    }\r\n    else if (ps.length === 3) {\r\n        return splitQuadAt(ps, t);\r\n    }\r\n    else if (ps.length === 4) {\r\n        return splitCubicAt(ps, t);\r\n    }\r\n    return [];\r\n}\r\n/**\r\n * Returns 2 new cubic beziers split at the given t parameter, i.e. for the ranges\r\n * [0,t] and [t,1]. Uses de Casteljau's algorithm.\r\n *\r\n * A loose bound on the accuracy of the resultant points is given by:\r\n * |δP| = 2n*max_k(|b_k|)η, where n = 3 (cubic), b_k are the control points\r\n * abd η is Number.EPSILON.\r\n * @param ps A cubic bezier curve\r\n * @param t The t parameter where the curve should be split\r\n */\r\nfunction splitCubicAt(ps, t) {\r\n    let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;\r\n    let s = 1 - t;\r\n    let t2 = t * t;\r\n    let t3 = t2 * t;\r\n    let s2 = s * s;\r\n    let s3 = s2 * s;\r\n    /** The split point */\r\n    let p = [\r\n        t3 * x3 + 3 * s * t2 * x2 + 3 * s2 * t * x1 + s3 * x0,\r\n        t3 * y3 + 3 * s * t2 * y2 + 3 * s2 * t * y1 + s3 * y0\r\n    ];\r\n    let ps1 = [\r\n        [x0, y0],\r\n        [t * x1 + s * x0,\r\n            t * y1 + s * y0],\r\n        [t2 * x2 + 2 * s * t * x1 + s2 * x0,\r\n            t2 * y2 + 2 * s * t * y1 + s2 * y0],\r\n        p\r\n    ];\r\n    let ps2 = [\r\n        p,\r\n        [t2 * x3 + 2 * t * s * x2 + s2 * x1,\r\n            t2 * y3 + 2 * t * s * y2 + s2 * y1],\r\n        [t * x3 + s * x2,\r\n            t * y3 + s * y2],\r\n        [x3, y3]\r\n    ];\r\n    return [ps1, ps2];\r\n}\r\nfunction splitQuadAt(ps, t) {\r\n    let [[x0, y0], [x1, y1], [x2, y2]] = ps;\r\n    let s = 1 - t;\r\n    /** The split point */\r\n    let p = [\r\n        s * s * x0 + 2 * s * t * x1 + t * t * x2,\r\n        s * s * y0 + 2 * s * t * y1 + t * t * y2\r\n    ];\r\n    let ps1 = [\r\n        [x0, y0],\r\n        [s * x0 + t * x1,\r\n            s * y0 + t * y1],\r\n        p\r\n    ];\r\n    let ps2 = [\r\n        p,\r\n        [s * x1 + t * x2,\r\n            s * y1 + t * y2],\r\n        [x2, y2]\r\n    ];\r\n    return [ps1, ps2];\r\n}\r\nfunction splitLineAt(ps, t) {\r\n    let [[x0, y0], [x1, y1]] = ps;\r\n    let s = 1 - t;\r\n    /** The split point */\r\n    let p = [\r\n        s * x0 + t * x1,\r\n        s * y0 + t * y1\r\n    ];\r\n    let ps1 = [\r\n        [x0, y0],\r\n        p\r\n    ];\r\n    let ps2 = [\r\n        p,\r\n        [x1, y1]\r\n    ];\r\n    return [ps1, ps2];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/split-at.ts?");

/***/ }),

/***/ "./src/draw/text.ts":
/*!**************************!*\
  !*** ./src/draw/text.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"text\": () => (/* binding */ text)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/draw/default-class.ts\");\n/* harmony import */ var _xmlns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlns.js */ \"./src/draw/xmlns.ts\");\n\r\n\r\n/**\r\n * Draws text\r\n * @param g a SVG group element wherein to draw\r\n * @param p\r\n * @param str\r\n * @param fontSize\r\n * @param classes\r\n * @param delay\r\n */\r\nfunction text(g, p, str, fontSize, classes = _default_class_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLASS, delay) {\r\n    let $text = document.createElementNS(_xmlns_js__WEBPACK_IMPORTED_MODULE_1__.XMLNS, 'text');\r\n    $text.setAttributeNS(null, \"x\", p[0].toString());\r\n    $text.setAttributeNS(null, \"y\", p[1].toString());\r\n    $text.setAttributeNS(null, \"font-size\", fontSize.toString());\r\n    $text.setAttributeNS(null, \"class\", classes);\r\n    $text.textContent = str;\r\n    g.appendChild($text);\r\n    if (delay) {\r\n        setTimeout(() => $text.remove(), delay);\r\n    }\r\n    return [$text];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/text.ts?");

/***/ }),

/***/ "./src/draw/xmlns.ts":
/*!***************************!*\
  !*** ./src/draw/xmlns.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XMLNS\": () => (/* binding */ XMLNS)\n/* harmony export */ });\nconst XMLNS = 'http://www.w3.org/2000/svg';\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/draw/xmlns.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawFs\": () => (/* reexport safe */ _draw_fs_js__WEBPACK_IMPORTED_MODULE_0__.drawFs),\n/* harmony export */   \"enableDebugDrawFs\": () => (/* reexport safe */ _debug_debug_js__WEBPACK_IMPORTED_MODULE_1__.enableDebugDrawFs)\n/* harmony export */ });\n/* harmony import */ var _draw_fs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-fs.js */ \"./src/draw-fs.ts\");\n/* harmony import */ var _debug_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug/debug.js */ \"./src/debug/debug.ts\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://FloDraw/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	FloDraw = __webpack_exports__;
/******/ 	
/******/ })()
;