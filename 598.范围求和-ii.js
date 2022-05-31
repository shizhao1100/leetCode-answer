/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if(!ops.length) return m * n
    let minA = ops[0][0], minB = ops[0][1]
    for(let i = 1; i < ops.length; i++) {
      minA = Math.min(minA, ops[i][0])
      minB = Math.min(minB, ops[i][1])
    }
    return minA * minB
};
// @lc code=end

