/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
	let stringHash = {};
	A.split(' ').forEach((item) => {
		if (stringHash[item]) {
			stringHash[item].A++;
		} else {
			stringHash[item] = { A: 1 };
		}
	});
	B.split(' ').forEach((item) => {
		if (stringHash[item]) {
			if (stringHash[item].B) {
				stringHash[item].B++;
			} else {
				stringHash[item].B = 1;
			}
		} else {
			stringHash[item] = { B: 1 };
		}
	});
	let answer = [];
	for (let key in stringHash) {
		if (stringHash[key].A === 1 && stringHash[key].B === undefined) {
			answer.push(key);
		}
		if (stringHash[key].B === 1 && stringHash[key].A === undefined) {
			answer.push(key);
		}
	}
	return answer;
};
// @lc code=end
