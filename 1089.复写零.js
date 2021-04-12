/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	let arrCopy = [];
	for (let i = 0; i < arr.length; i++) {
		if (arrCopy.length < arr.length) {
			arrCopy.push(arr[i]);
			if (arr[i] === 0) {
				arrCopy.push(arr[i]);
			}
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arrCopy[i];
	}
};
// @lc code=end
