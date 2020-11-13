/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    A.sort((a, b) => {
        if (a > b) {
            return 1
        }
        return -1
    })
    let i = 0;
    while (K) {
        if (A[i] < 0) {
            A[i] = -A[i];
            i++;
            K--;
        } else {
            if (!isNaN(A[i - 1])) {
                let min = i;
                if (Math.abs(A[i]) > A[i - 1]) {
                    min = i - 1
                }
                A[min] = -A[min];
                K--;
            } else {
                A[i] = -A[i];
                K--;
            }
        }
    }
    let sum = 0;
    for (i = 0; i < A.length; i++) {
        sum = sum + A[i]
    }
    return sum;
};
// @lc code=end

