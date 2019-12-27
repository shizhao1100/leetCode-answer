/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
	if (num === 0) {
		return '0';
	}
	const hashValue = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
	let answer = '';
	if (num < 0) {
		num = num + 4294967295 + 1;
	}
	while (num !== 0) {
		key = num % 16;
		answer = hashValue[key] + answer;
		num = parseInt(num / 16, 10);
	}
	return answer;
};
// @lc code=end
