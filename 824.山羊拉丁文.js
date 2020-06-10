/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
	let answer = '';
	const SArray = S.split(' ');
	const vowelList = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true,
		A: true,
		E: true,
		I: true,
		O: true,
		U: true
	};
	function step1(s) {
		if (vowelList[s[0]]) {
			return s + 'ma';
		} else {
			return s.substr(1) + s[0] + 'ma';
		}
	}
	function step2(s, len) {
		let tempString = '';
		for (let i = 0; i < len + 1; i++) {
			tempString += 'a';
		}
		return s + tempString;
	}
	for (let i = 0; i < SArray.length; i++) {
		answer += step2(step1(SArray[i]), i) + ' ';
	}
	return answer.substring(0, answer.length - 1);
};
// @lc code=end
