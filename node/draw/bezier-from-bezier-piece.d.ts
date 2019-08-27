/**
 * Returns a new bezier from the given bezier by limiting its t range.
 *
 * Duplicated here so we don't circularly depend on flo-bezier.
 *
 * Uses de Casteljau's algorithm.
 *
 * @param ps A bezier
 * @param tRange A t range
 */
declare function bezierFromBezierPiece(ps: number[][], tRange: number[]): number[][];
export { bezierFromBezierPiece };
