/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
	let newString = '';
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			newString = newString + String.fromCharCode(str.charCodeAt(i) + 32);
		} else {
			newString = newString + str[i];
		}
	}
	return newString;
};
// @lc code=end
