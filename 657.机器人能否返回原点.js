/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	let up = 0;
	let left = 0;
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'U') {
			up++;
		} else if (moves[i] === 'D') {
			up--;
		} else if (moves[i] === 'L') {
			left++;
		} else if (moves[i] === 'R') {
			left--;
		}
	}
	return !up && !left;
};
// @lc code=end
