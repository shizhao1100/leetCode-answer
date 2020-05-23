/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
/**
 * @way 
 * @from https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/solution/ti-jiao-ji-lu-zhong-0msti-jiao-de-dai-ma-han-yi-by/
 * @description 
 * @result 
 * @O 
 * @time 2020-05-25 18:24:17
 */
var countPrimeSetBits = function(L, R) {
	let res = 0;
	for (let i = L; i <= R; i++) {
		res += (665772 >> i.toString(2).replace(/0/g, '').length) & 1;
	}
	return res;
};
// @lc code=end
