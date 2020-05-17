/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
	let sum = function(array) {
		let count = 0;
		for (let i = 0; i < array.length; i++) {
			count += array[i];
		}
		return count;
	};
	let numSum = sum(nums);
	for (let i = 0; i < nums.length; i++) {
		if (2 * sum(nums.slice(0, i)) + nums[i] === numSum) {
			return i;
		}
	}
	return -1;
};
// @lc code=end
