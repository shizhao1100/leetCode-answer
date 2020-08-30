/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
	let hash = {};
	for (let i = 0; i < A.length; i++) {
		if (!hash[A[i]]) {
			hash[A[i]] = true;
		} else {
			return A[i];
		}
	}
};
// @lc code=end
