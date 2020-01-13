/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	function getNumber(numString) {
		if (numString !== undefined) {
			return parseInt(numString, 10);
		}
		return 0;
	}
	let i = num1.length;
	let j = num2.length;

	let upNumber = 0;
	let answerString = '';
	while (i > 0 || j > 0 || upNumber !== 0) {
		let answerChart = '';
		let temp1 = getNumber(num1[i - 1]);
		let temp2 = getNumber(num2[j - 1]);
		let num = temp1 + temp2 + upNumber;
		if (num >= 10) {
			upNumber = 1;
			answerChart = num % 10;
		} else {
			upNumber = 0;
			answerChart = num.toString();
		}
		answerString = answerChart + answerString;
		i--;
		j--;
	}
	return answerString;
};
// @lc code=end
