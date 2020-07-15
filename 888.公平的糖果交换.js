/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function sum(arr) {
	let answer = 0;
	for (let i = 0; i < arr.length; i++) {
		answer += arr[i];
	}
	return answer;
}
function hash(arr) {
	let hash = {};
	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]] = true;
	}
	return hash;
}
var fairCandySwap = function(A, B) {
	const sumA = sum(A);
	const sumB = sum(B);
	const delta = (sumA - sumB) / 2;
	const hashB = hash(B);
	for (let i = 0; i < A.length; i++) {
		if (hashB[A[i] - delta]) {
			return [ A[i], A[i] - delta ];
		}
	}
	return [ 0, 0 ];
};
fairCandySwap([ 1, 1 ], [ 2, 2 ]);
// @lc code=end
