/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	let answer = [];
	for (let i = left; i <= right; i++) {
		let si = i.toString();
		if (si.includes('0')) continue;
		let j = 0;
		for (j = 0; j < si.length; j++) {
			if (i % parseInt(si[j]) != 0) {
				break;
			}
			if (j === si.length - 1) {
				answer.push(i);
			}
		}
	}
	return answer;
};
// @lc code=end
