/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 递归
/**
 * @way 递归
 * @from self
 * @description
 * 起始状态 cost.length <= 1 return 0
 * 递推公式 val(i) = min(val(i-1)+i,val(i-2)+val(i-1)) 
 * @result Time Limit Exceeded
 * @O 
 * @time 2020-05-21 22:08:51
 */
var minCostClimbingStairs = function(cost) {
	if (cost.length <= 1) {
		return 0;
	}
	return Math.min(
		minCostClimbingStairs(cost.slice(0, cost.length - 1)) + cost[cost.length - 1],
		minCostClimbingStairs(cost.slice(0, cost.length - 2)) + cost[cost.length - 2]
	);
};

/**
 * @way dp
 * @from self
 * @description
 * 起始状态 cost.length <= 1 return 0
 * 递推公式 val(i) = min(val(i-1)+i,val(i-2)+val(i-1)) 
 * @result Accepted
 * @O 
 * @time 2020-05-21 22:08:51
 */
var minCostClimbingStairs = function(cost) {
	let val = [ 0, 0 ];
	if (cost.length <= 1) {
		return 0;
	}
	let i = 1;
	for (; i < cost.length; i++) {
		val[i + 1] = Math.min(val[i] + cost[i], val[i - 1] + cost[i - 1]);
	}
	return val[i];
};

// @lc code=end
