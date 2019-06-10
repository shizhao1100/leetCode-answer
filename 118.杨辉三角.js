/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let answer = [];
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  answer.push([1], [1, 1]);
  for (let i = 2; i < numRows; i++) {
    let answer_i = new Array(i + 1);
    answer_i[0] = 1;
    answer_i[i] = 1;
    for (let j = 1; j < i; j++) {
      answer_i[j] = answer[i - 1][j - 1] + answer[i - 1][j];
    }
    answer.push(answer_i);
  }
  return answer;
};

