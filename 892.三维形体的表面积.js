/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const size = grid.length;
  let itemCount = 0;
  let overlapCount = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      itemCount += grid[i][j];
      if (grid[i][j] !== 0) {
        overlapCount += grid[i][j] - 1;
      }
      overlapCount += Math.min(grid[i][j], grid[i][j + 1] ?? 0);
    }
    for (let k = 0; k < size; k++) {
      overlapCount += Math.min(grid[k][i], grid[k + 1]?.[i] ?? 0);
    }
  }
  return itemCount * 6 - overlapCount * 2;
};
// @lc code=end
