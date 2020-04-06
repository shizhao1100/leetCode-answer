/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	if (!nums.length) return 0;
	let answer = 1;
	let count = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			count++;
		} else {
			if (count > answer) {
				answer = count;
			}
			count = 1;
		}
	}

	return count > answer ? count : answer;
};
// @lc code=end
