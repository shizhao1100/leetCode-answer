/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
	let answerList = [];
	let i = 0;
	let j = 0;
	let answer = 2;
	while (true) {
		while (true) {
			answer = Math.pow(x, i) + Math.pow(y, j);
			if (answer <= bound) {
				if (!answerList.includes(answer)) {
					answerList.push(answer);
				}
				if (y === 1) {
					break;
				}
				j++;
				continue;
			} else {
				break;
			}
		}
		if (x === 1) {
			break;
		}
		if (answer > bound && j === 0) {
			break;
		}
		j = 0;
		i++;
	}
	return answerList;
}; // @lc code=end
