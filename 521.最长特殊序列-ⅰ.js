/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
	if (a.length !== b.length) {
		return Math.max(a.length, b.length);
	} else {
		if (a === b) {
			return -1;
		} else {
			return a.length;
		}
	}
};
// @lc code=end
