/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	let index = undefined;
	let B = undefined;
	let answer = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i] >= 0) {
			index = i;
			break;
		}
	}
	if (index !== undefined) {
		B = A.splice(index).map((d) => {
			return d * d;
		});
		A = A.reverse().map((d) => {
			return d * d;
		});
		let indexA = 0;
		let indexB = 0;
		while (indexA < A.length && indexB < B.length) {
			if (A[indexA] < B[indexB]) {
				answer.push(A[indexA]);
				indexA++;
			} else {
				answer.push(B[indexB]);
				indexB++;
			}
		}
		return answer.concat(A.splice(indexA)).concat(B.splice(indexB));
	}
	return A.reverse().map((d) => {
		return d * d;
	});
};
// @lc code=end
