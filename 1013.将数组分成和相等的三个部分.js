/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
/**
 * @way
 * @from https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/comments/
 * @description 首先对数组求和判断和是否能被3整除不能则不能等分，能则前后双指针、保证第一、第三份为总和的1/3中间即为1/3。
 * @result
 * @O
 * @time 2020-12-25 11:12:01
 */
var canThreePartsEqualSum = function (A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  if (sum % 3 !== 0) {
    return false;
  }
  let equal = sum / 3;
  let start = 0;
  let end = A.length - 1;
  let startSum = 0;
  let endSum = 0;
  for (let i = 0; i < A.length; i++) {
    startSum += A[i];
    if (startSum === equal) {
      start = i;
      break;
    }
  }
  for (let i = A.length - 1; i > start; i--) {
    endSum += A[i];
    if (endSum === equal) {
      end = i;
      if (end - start > 1) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
