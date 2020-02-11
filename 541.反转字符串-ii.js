/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	let reverse = true;
	let result = '';
	for (let i = 0; i < s.length; i = i + k) {
		if (reverse) {
			reverse = false;
			let start = i;
			let end = Math.min(s.length - 1, i + k - 1);
			for (let j = end; j >= start; j--) {
				result = result + s[j];
			}
		} else {
			reverse = true;
			let start = i;
			let end = Math.min(s.length - 1, i + k - 1);
			for (let j = start; j <= end; j++) {
				result = result + s[j];
			}
		}
	}
	return result;
};
// @lc code=end
