/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let answer = [];
  let minX = {};
  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    let minIndex = undefined;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        minIndex = j;
      }
    }
    minX[`${i}-${minIndex}`] = true;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    let max = -Infinity;
    let maxIndex = undefined;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i];
        maxIndex = j;
      }
    }
    if (minX[`${maxIndex}-${i}`]) {
      answer.push(matrix[maxIndex][i]);
    }
  }
  return answer;
};
// @lc code=end
