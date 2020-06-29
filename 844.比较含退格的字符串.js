/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

function getStr(str) {
	let s = '';
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '#') {
			stack.pop();
		} else {
			stack.push(str[i]);
		}
	}
	return stack.join('');
}
var backspaceCompare = function(S, T) {
	let s = getStr(S);
	let t = getStr(T);
	return s === t;
};
// @lc code=end
