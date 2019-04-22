/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (41.94%)
 * Total Accepted:    34.9K
 * Total Submissions: 83.2K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) {
        return null;
    }
    let answer = -Infinity;
    let maxSubArrayValue = 0;
    for (let i = 0; i < nums.length; i++) {
        maxSubArrayValue = maxSubArrayValue + nums[i];
        maxSubArrayValue = Math.max(maxSubArrayValue, nums[i]);
        answer = Math.max(maxSubArrayValue, answer);
    }
    return answer;
};

// [动态规划] 逆推 
// 设 dp[n] == dp[m] m = min(0,n)
// 例如 [-2,1,-3] n = 2,m = 1 dp_2 == dp_1 = 1 
// 即 dp[n] = max(dp[n-1],sum(dp[m]+value[m+1]+...value[n]),value[n])
// 即 需要维护的数据为 dp[n-1],m
// TODO 这个解法还是不对
var maxSubArray = function (nums) {
    function sumM2N(value, m, n, valueList) {
        let sum = value;
        for (let i = m + 1; i <= n; i++) {
            sum = sum + valueList[i];
        }
        return sum;
    }
    if (!nums.length) {
        return null;
    }
    let dp_n = -Infinity;
    let m = 0;
    for (let n = 0; n < nums.length; n++) {
        let summ2n = sumM2N(dp_n, m, n, nums);
        let _dp_n = Math.max(dp_n, summ2n, nums[n]);
        if (_dp_n > dp_n) {
            dp_n = _dp_n;
            m = n;
        }
    }
    return dp_n;
}
maxSubArray([8,-19,5,-4,20]);
