/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (45.00%)
 * Total Accepted:    43.5K
 * Total Submissions: 96.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// [动态规划] 逆推 爬上最后一级台阶有两种方式，爬了一级||爬了两级， 假设N>=2  则dp[n] = dp[n-1] + dp[n-2]
// 即这里需要维护的数据为 dp[n-1],dp[n-1]
var climbStairs = function (n) {
    let answerList = [1, 2];
    for (let i = 2; i <= n; i++) {
        answerList[i] = answerList[i - 1] + answerList[i - 2];
    }
    return answerList[n - 1];
};