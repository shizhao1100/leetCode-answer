/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
	let max = -Infinity;
	let second = -Infinity;
	let maxIndex = undefined;
	for (let i = 0; i < nums.length; i++) {
		if (max < nums[i]) {
			second = max;
			max = nums[i];
			maxIndex = i;
		} else if (second < nums[i]) {
			second = nums[i];
		}
	}
	return max >= second * 2 ? maxIndex : -1;
};
// @lc code=end
