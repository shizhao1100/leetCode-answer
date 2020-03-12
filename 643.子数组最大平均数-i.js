/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
	let maxAverage = 0;
	let sumK = 0;
	for (let i = 0; i < k; i++) {
		sumK = sumK + nums[i];
	}
	maxAverage = sumK / k;

	for (let i = 1; i <= nums.length - k; i++) {
		sumK = sumK - nums[i - 1];
		sumK = sumK + nums[k - 1 + i];
		if (sumK / k > maxAverage) {
			maxAverage = sumK / k;
		}
	}
	return maxAverage;
};
// @lc code=end
