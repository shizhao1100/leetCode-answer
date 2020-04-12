/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
	n = n ^ (n >> 1);
	return (n & (n + 1)) == 0;
};

// @lc code=end
