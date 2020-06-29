/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
	for (let i = 0; i < A.length; i++) {
		if (A[i + 1] < A[i]) return i;
	}
};
// @lc code=end
