/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
	let len = 1;
	let count = 0;
	for (let i = 0; i < S.length; i++) {
		let charLength = widths[S[i].charCodeAt() - 97];
		if (count + charLength <= 100) {
			count = count + charLength;
		} else {
			count = charLength;
			len++;
		}
	}
	return [ len, count ];
};
// @lc code=end
