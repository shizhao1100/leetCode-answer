/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const dx1 = points[1][0] - points[0][0];
  const dy1 = points[1][1] - points[0][1];
  const dx2 = points[2][0] - points[0][0];
  const dy2 = points[2][1] - points[0][1];
  return dx1 * dy2 !== dx2 * dy1;
};
// @lc code=end
