/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 * @way 逆推法
 * @from https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/solution/si-xiang-zhuan-huan-n-1ge-zhi-jia-1deng-yu-1ge-zhi/
 * @description n-1个值加1等于1个值减1 
 * 那么题目就转换为所有值减去最小值的和。
 * @result 
 * @O n
 * @time 2020-02-03 10:02:10
 */
var minMoves = function(nums) {
	let answer = 0;
	let minNum = Math.min(...nums);
	for (let i = 0; i < nums.length; i++) {
		answer = answer + nums[i] - minNum;
	}
	return answer;
};
// @lc code=end
