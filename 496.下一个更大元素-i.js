/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @way 单调栈
 * @from https://leetcode-cn.com/problems/next-greater-element-i/solution/xia-yi-ge-geng-da-yuan-su-i-by-leetcode/
 * @description 用单调栈来构建整个nums2的下一个更大的元素,结果生成一个hashtable, 遍历nums1从hashtable中直接返回所需要的值
 * 时间复杂度Om+n 要优于 直接从 nums2 中 遍历 nums1 中的值 O m*n
 * @result 
 * @O 
 * @time 2020-01-27 10:17:27
 */
var nextGreaterElement = function (nums1, nums2) {
  let hashTable = {};
  let upStack = [];
  let answer = [];
  for (let i = 0; i < nums2.length; i++) {
    if (upStack.length === 0 || nums2[i] < upStack[0]) {
      upStack.unshift(nums2[i]);
      continue;
    } else {
      while (nums2[i] > upStack[0] && upStack.length > 0) {
        hashTable[upStack[0]] = nums2[i];
        upStack.shift();
      }
      i--;
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (hashTable[nums1[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(hashTable[nums1[i]]);
    }
  }
  return answer;
};
// @lc code=end

