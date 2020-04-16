/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if (!nums.length) return -1;
	let left = 0;
	let right = nums.length - 1;
	let point = parseInt(nums.length / 2);
	while (right >= left) {
		if (nums[point] === target) {
			return point;
		} else if (nums[point] > target) {
			// 点1 point 已经过判断 二分时候跳过point点
			right = point - 1;
			point = parseInt((left + right) / 2);
		} else if (nums[point] < target) {
			left = point + 1;
			point = parseInt((left + right) / 2);
		}
	}
	return -1;
};
// @lc code=end
