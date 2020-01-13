/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let rules = {
		'3': 'Fizz',
		'5': 'Buzz'
	};
	let answerList = [];
	for (let i = 1; i <= n; i++) {
		let answer = '';
		for (let key in rules) {
			if (Number.isInteger(i / parseInt(key, 10))) {
				answer = answer + rules[key];
			}
		}
		answerList.push(answer || i.toString());
	}
	return answerList;
};
// @lc code=end
