/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const answer = [];
  k = k % (grid.length * grid[0].length)

  k = grid.length * grid[0].length - k
  for (let i = 0; i < grid.length; i++) {
    answer.push([])
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      k = k % (grid.length * grid[0].length)
      answer[i][j] = grid[parseInt(k / grid[0].length)][k % grid[0].length]
      k++
    }
  }
  return answer;
};

// @lc code=end

