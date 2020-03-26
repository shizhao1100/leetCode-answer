/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
function setValue(x, y, M, ls, hs) {
  let sum = M[x][y];
  let count = 1;
  if (x >= 1 && y >= 1) {
    count++;
    sum = sum + M[x - 1][y - 1];
  }
  if (x >= 1) {
    count++;
    sum = sum + M[x - 1][y];
  }
  if (x >= 1 && y <= hs - 2) {
    count++;
    sum = sum + M[x - 1][y + 1];
  }
  if (y >= 1) {
    count++;
    sum = sum + M[x][y - 1];
  }
  if (y <= hs - 2) {
    count++;
    sum = sum + M[x][y + 1];
  }
  if (x <= ls - 2 && y >= 1) {
    count++;
    sum = sum + M[x + 1][y - 1];
  }
  if (x <= ls - 2 && y <= hs - 2) {
    count++;
    sum = sum + M[x + 1][y + 1];
  }
  if (x <= ls - 2) {
    count++;
    sum = sum + M[x + 1][y];
  }
  return parseInt(sum / count);
}
var imageSmoother = function (M) {
  let answers = [];
  let ls = M.length;
  let hs = M[0].length;
  for (let i = 0; i < ls; i++) {
    let answer = [];
    for (let j = 0; j < hs; j++) {
      answer.push(setValue(i, j, M, ls, hs));
    }
    answers.push(answer)
  }
  return answers;
};
// @lc code=end

