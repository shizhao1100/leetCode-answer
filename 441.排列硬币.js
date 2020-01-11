/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
* 方法：减法
* 细节：n 从第一行开始 一直减i 计算最终值
*/
var arrangeCoins = function(n) {
	let i = 1;
	while (n >= 0) {
		n = n - i;
		i++;
	}
	return i - 2;
};

/*
* 方法：等差数列
* 细节：根据规则可知硬币为一个等差数列 根据等差数列的求和公式 S = a1 + n(n-1)/2; 
* 即 sqrt(2*n + 1/4) - 1/2;
*/
var arrangeCoins = function(n) {
	return parseInt(Math.sqrt(2 * n + 0.25) - 0.5);
};

// @lc code=end
