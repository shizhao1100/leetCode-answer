/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

/*
 * 解法: 4的幂即4的N次方 2的N次方的二进制位首位位1其余位位0
 * 4的N次方 二进制 即为 二进制位数为奇数的2的幂
 */
var isPowerOfFour = function (num) {
  const numString = num.toString(2);
  if (numString === '0') {
    return false;
  }
  if (numString.length % 2 !== 0) {
    for (let i = 1; i < numString.length; i++) {
      if (numString[i] !== '0') {
        return false;
      }
    }
    return true;
  }
  return false
};
// @lc code=end

