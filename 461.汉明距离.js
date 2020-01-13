/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/**
 * @way 
 * @from self 
 * @description 本质上就是一个异或运算 转为二进制字符串去除字符串中的0统计剩余字符串的长度
 * @result Accepted
 * @O 1
 * @time 2020-01-14 00:07:19
 */
var hammingDistance = function(x, y) {
	return (x ^ y).toString(2).replace(/0/g,'').length;
};
// @lc code=end
