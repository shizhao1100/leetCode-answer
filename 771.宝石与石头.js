/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	let answer = 0;
	let hashTable = {};
	for (let i = 0; i < J.length; i++) {
		hashTable[J[i]] = true;
	}
	for (let i = 0; i < S.length; i++) {
		if (hashTable[S[i]]) answer++;
	}
	return answer;
};
// @lc code=end
