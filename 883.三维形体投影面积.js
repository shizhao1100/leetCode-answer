/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const size = grid.length;
  let xy = 0;
  let yz = 0;
  let zx = 0;
  for (let i = 0; i < size; i++) {
    let maxYzi = 0;
    let maxZxi = 0;
    for (let k = 0; k < size; k++) {
      if (maxZxi < grid[k][i]) {
        maxZxi = grid[k][i];
      }
    }
    for (let j = 0; j < size; j++) {
      if (grid[i][j] > 0) {
        xy++;
      }
      if (maxYzi < grid[i][j]) {
        maxYzi = grid[i][j];
      }
    }
    yz += maxYzi;
    zx += maxZxi
  }
  return xy + yz + zx;
};
// @lc code=end
