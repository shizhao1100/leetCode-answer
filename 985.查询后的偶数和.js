/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
	let cashAnswer = 0;
	let answer = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 === 0) {
			cashAnswer = cashAnswer + A[i];
		}
	}
	for (let i = 0; i < queries.length; i++) {
		const val = queries[i][0];
		const index = queries[i][1];
		if (A[index] % 2 === 0) {
			cashAnswer = cashAnswer - A[index];
		}
		const Ai = A[index] + val;
		if (Ai % 2 === 0) {
			cashAnswer = cashAnswer + Ai;
		}
		A[index] = Ai;
		answer.push(cashAnswer);
	}
	return answer;
};
// @lc code=end
