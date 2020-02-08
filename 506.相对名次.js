/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
	let answer = new Array(nums.length);
	let firstStack = [
		{
			val: -Infinity,
			index: -Infinity
		}
	];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < firstStack.length; j++) {
			if (nums[i] > firstStack[j].val) {
				firstStack.splice(j, 0, {
					val: nums[i],
					index: i
				});
				break;
			}
		}
	}
	firstStack.pop();
	if (firstStack[0] && isFinite(firstStack[0].val)) {
		answer[firstStack[0].index] = 'Gold Medal';
	}
	if (firstStack[1] && isFinite(firstStack[1].val)) {
		answer[firstStack[1].index] = 'Silver Medal';
	}
	if (firstStack[2] && isFinite(firstStack[2].val)) {
		answer[firstStack[2].index] = 'Bronze Medal';
	}
	for (let i = 3; i < firstStack.length; i++) {
		answer[firstStack[i].index] = (i + 1).toString();
	}
	return answer;
};
// @lc code=end
