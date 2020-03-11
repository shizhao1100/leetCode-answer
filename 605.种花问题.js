/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
	flowerbed.unshift(0);
	flowerbed.push(0);
	for (let i = 0; i < flowerbed.length; i++) {
		if (n === 0) {
			return true;
		}
		if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
			flowerbed[i] = 1;
			n--;
		}
	}
	return false;
};
// @lc code=end
