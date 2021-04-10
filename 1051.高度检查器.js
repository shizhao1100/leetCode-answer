/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
	const copyHeight = [].concat(heights);
	heights.sort(function(a, b) {
		return a - b;
	});
	let answer = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== copyHeight[i]) {
			answer++;
		}
	}
	return answer;
};
// @lc code=end
