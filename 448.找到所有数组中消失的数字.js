/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
	let answer = [];
	for (let i = 0; i < nums.length; i++) {
		nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			answer.push(i + 1);
		}
    }
    return answer;
};
// @lc code=end
