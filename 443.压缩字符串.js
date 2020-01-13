/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
	let slowPoint = 0;
	let fastPoint = 0;
	let result = 0;
	while (slowPoint < chars.length) {
		while (chars[slowPoint] === chars[fastPoint] && fastPoint < chars.length) {
			fastPoint++;
		}
		chars[result] = chars[slowPoint];
		result++;
		let chartCount = fastPoint - slowPoint;
		if (chartCount > 1) {
			let chartCountString = chartCount.toString();
			let charsCountLen = chartCountString.length;
			for (let i = 0; i < charsCountLen; i++) {
                chars[result] = chartCountString[i];
                result++;
			}
		}
		slowPoint = fastPoint;
    }
	return result;
};
// @lc code=end
