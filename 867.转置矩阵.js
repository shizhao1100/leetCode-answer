/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	let answer = new Array(A[0].length);
	for (let i = 0; i < answer.length; i++) {
		answer[i] = new Array(A.length);
	}
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			answer[j][i] = A[i][j];
		}
	}
	return answer;
};
// @lc code=end
