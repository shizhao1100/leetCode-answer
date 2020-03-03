/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
	let answer = 0;
	let hastTable = {};
	for (let i = 0; i < nums.length; i++) {
		if (hastTable[nums[i]]) {
			hastTable[nums[i]]++;
		} else {
			hastTable[nums[i]] = 1;
		}
	}
	for (let key in hastTable) {
		answer = Math.max(
			hastTable[Number(key) + 1] + hastTable[key] || 0,
			hastTable[Number(key) - 1] + hastTable[key] || 0,
			answer
		);
	}
	return answer;
};
// @lc code=end
