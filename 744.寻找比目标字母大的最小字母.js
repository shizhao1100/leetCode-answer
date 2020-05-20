/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
	let left = 0;
	let right = letters.length - 1;
	let mid = parseInt((letters.length - 1) / 2);
	while (right > left) {
		if (letters[mid] > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
		mid = parseInt((right + left) / 2);
	}
	if (left === letters.length - 1 && letters[left] <= target) return letters[0];
	return letters[left];
};
// @lc code=end
