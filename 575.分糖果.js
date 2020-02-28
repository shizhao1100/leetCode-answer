/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
	const candiesCount = candies.length;
	const candiesTypeCount = new Set(candies).size;
	if (candiesTypeCount <= candiesCount / 2) {
		return candiesTypeCount;
	} else {
		return candiesCount / 2;
	}
};
// @lc code=end
