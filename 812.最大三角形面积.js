/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// 先求个凸包，理论上最大的三角型的顶点肯定会在凸包上
// 在o^3复杂度的一个三重遍历 求得最大三角形面积

const getConvexHull = function(points) {
	// 计算叉积
	function cross(x0, y0, x1, y1) {
		return x0 * y1 - x1 * y0;
	}
	// 计算极角
	function crossAngle(p0, p1, p2) {
		return cross(p1[0] - p0[0], p1[1] - p0[1], p2[0] - p0[0], p2[1] - p0[1]);
	}
	// 极角排序
	function sortCmp(p1, p2) {
		return crossAngle(p0, p1, p2);
	}
	let p0 = points[0];
	for (let i = 1; i < points.length; i++) {
		if (points[i][1] < p0[1] || (points[i][1] === p0[1] && points[i][1] < p0[1])) {
			p0 = points[i];
		}
	}
	points.sort(sortCmp);
	// 剔除p0点
	if (points[0] === p0) {
		points.shift();
	}
	if (points[points.length - 1] === p0) {
		points.pop();
	}
	let firstNode = points.pop();
	let lastNode = undefined;
	let convexHull = undefined;
	lastNode = points[0];
	convexHull = [ lastNode, p0, firstNode ];

	for (let i = points.length - 1; i >= 0; i--) {
		while (crossAngle(convexHull[convexHull.length - 2], convexHull[convexHull.length - 1], points[i]) < 0) {
			convexHull.pop();
		}
		convexHull.push(points[i]);
	}
	if (convexHull[0] === convexHull[convexHull.length - 1]) {
		convexHull.pop();
	}
	return convexHull;
};
// 海伦公式
function area(p0, p1, p2) {
	return (
		0.5 * Math.abs(p0[0] * p1[1] + p1[0] * p2[1] + p2[0] * p0[1] - p0[1] * p1[0] - p1[1] * p2[0] - p2[1] * p0[0])
	);
}
var largestTriangleArea = function(points) {
	const nodeList = getConvexHull(points);
	let maxArea = -Infinity;
	for (let i = 0; i < nodeList.length; i++) {
		for (let j = i + 1; j < nodeList.length; j++) {
			for (let k = j + 1; k < nodeList.length; k++) {
				maxArea = Math.max(area(nodeList[i], nodeList[j], nodeList[k]), maxArea);
			}
		}
	}
	return maxArea;
};
// @lc code=end
