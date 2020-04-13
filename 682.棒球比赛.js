/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let answer = 0;
	let prevent = [];
	for (let i = 0; i < ops.length; i++) {
		if (ops[i] === '+') {
			prevent.unshift(prevent[0] + prevent[1]);
			answer = answer + prevent[0];
		} else if (ops[i] === 'D') {
			prevent.unshift(prevent[0] * 2);
			answer = answer + prevent[0];
		} else if (ops[i] === 'C') {
			answer = answer - prevent.shift();
		} else {
			answer = answer + parseInt(ops[i]);
			prevent.unshift(parseInt(ops[i]));
		}
	}
	return answer;
};
// @lc code=end
