/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短完整词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
	let licensePlateHash = {};
	let rg = /[a-zA-Z]/g;
	const licenseChar = licensePlate.match(rg);
	let answer = {
		length: Infinity,
		words: undefined
	};
	for (let i = 0; i < licenseChar.length; i++) {
		let lc = licenseChar[i].toLowerCase();
		if (licensePlateHash[lc]) {
			licensePlateHash[lc]++;
		} else {
			licensePlateHash[lc] = 1;
		}
	}
	for (let i = 0; i < words.length; i++) {
		let cp_licensePlateHash = JSON.parse(JSON.stringify(licensePlateHash));
		for (let j = 0; j < words[i].length; j++) {
			lc = words[i][j].toLowerCase();
			if (cp_licensePlateHash[lc] > 1) {
				cp_licensePlateHash[lc]--;
			} else if (cp_licensePlateHash[lc] === 1) {
				delete cp_licensePlateHash[lc];
				if (Object.keys(cp_licensePlateHash).length === 0) {
					if (words[i].length < answer.length) {
						answer.length = words[i].length;
						answer.words = words[i];
						break;
					}
				}
			}
		}
	}
	return answer.words;
};
// @lc code=end
