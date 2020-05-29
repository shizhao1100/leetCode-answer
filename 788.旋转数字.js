/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
	let goodNum = {
		'0': true,
		'1': true,
		'2': true,
		'5': true,
		'6': true,
		'8': true,
		'9': true
	};
	let required = {
		'2': true,
		'5': true,
		'6': true,
		'9': true
	};
	function checkNumberString(numberString) {
		let requiredCount = false;
		for (let j = 0; j < numberString.length; j++) {
			if (!goodNum[numberString[j]]) return false;
			if (required[numberString[j]]) requiredCount = true;
		}
		if (requiredCount) {
			return true;
		}
		return false;
	}

	let answer = 0;
	for (let i = 1; i <= N; i++) {
		let si = i.toString();
		if (checkNumberString(si)) answer++;
	}
	return answer;
};
// @lc code=end
