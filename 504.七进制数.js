/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
	let answer = '';
	let negative = false;
	if (num === 0) {
		return '0';
	}
	if (num < 0) {
		num = -num;
		negative = true;
	}
	while (num !== 0) {
		let d = num % 7;
		num = parseInt(num / 7, 10);
		answer = d + answer;
	}
	if (negative) {
		return '-' + answer;
	}
	return answer;
};
// @lc code=end
