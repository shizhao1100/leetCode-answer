/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start

/**
 * @param {number} N
 * @return {number}
 * @way 递归求解
 * @from self
 * @description 根据递推公式
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2)
 * 直接列出递归方程 求解
 * @result Accepted
 * @O pow(2,N)
 * @time 2020-02-09 11:20:54
 */
var fib = function(N) {
	if (N == 0) {
		return 0;
	} else if (N == 1) {
		return 1;
	} else {
		return fib(N - 1) + fib(N - 2);
	}
};

/**
 * @param {number} N
 * @return {number}
 * @way 记忆法
 * @from self
 * @description 根据公式
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2)
 * 直接求出F(0)-F(30)的解 根据输入返回
 * @result Accepted
 * @O N
 * @time 2020-02-09 11:20:54
 */
var fib = function(N) {
	if (N === 0) {
		return 0;
	}
	let answer = [ 0, 1 ];
	for (let i = 2; i < N + 1; i++) {
		answer[i] = answer[i - 1] + answer[i - 2];
	}
	return answer.pop();
};

/**
 * @param {number} N
 * @return {number}
 * @way 迭代法
 * @from https://leetcode-cn.com/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode/
 * @description 相较于记忆法 优化了空间复杂度, 不再记忆所有子问题的解,类似于动态规划只记录所需子问题的解。
 * 该问题仅依赖F(N-1) F(N-2)即可
 * @result Accepted
 * @O N
 * @time 2020-02-09 11:20:54
 */
var fib = function(N) {
	if (N === 0) {
		return 0;
	}
	if (N === 1) {
		return 1;
	}
	let value = 0;
	let prev2 = 0;
	let prev1 = 1;
	for (let i = 2; i < N + 1; i++) {
		value = prev1 + prev2;
		prev2 = prev1;
		prev1 = value;
	}
	return value;
};

/**
 * @param {number} N
 * @return {number}
 * @way 矩阵求幂
 * @from https://leetcode-cn.com/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode/
 * @description 有一个计算fib的矩阵公式，通过递归进行计算，一次可以计算两个fib值。
 * @result 
 * @O log(N)
 * @time 2020-02-09 11:20:54
 */
var fib = function(N) {};
/**
 * @param {number} N
 * @return {number}
 * @way 公式法
 * @from https://leetcode-cn.com/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode/
 * @description 计算fib的公式为
 * f(n) = 1 / (sqrt(5) * ((pow(((1+sqrt(5))/2)),2)-(pow(((1-sqrt(5))/2)),2))
 * 详见 https://demonstrations.wolfram.com/GeneralizedFibonacciSequenceAndTheGoldenRatio/
 * @result 
 * @O log(N)
 * @time 2020-02-09 11:20:54
 */
var fib = function(N) {
	return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, N) - Math.pow((1 - Math.sqrt(5)) / 2, N)) / Math.sqrt(5));
};
// @lc code=end
