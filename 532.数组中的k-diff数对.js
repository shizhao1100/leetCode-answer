/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
	if (k < 0) {
		return 0;
	}
	let hashValue = {};
	let hashDiff = {};
	for (let i = 0; i < nums.length; i++) {
		if (hashValue[nums[i] + k]) {
			hashDiff[nums[i]] = true;
		}
		if (hashValue[nums[i] - k]) {
			hashDiff[nums[i] - k] = true;
		}
		hashValue[nums[i]] = true;
	}
	return Object.keys(hashDiff).length;
};

// @lc code=end
