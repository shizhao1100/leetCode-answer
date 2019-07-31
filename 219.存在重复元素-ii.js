/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/*
* 方法：hash-table
* 细节：维护一个hash-table来记录已有的数据信息
* 时间复杂度：On
*/
var containsNearbyDuplicate = function (nums, k) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = [i];
    } else {
      for (let j = 0; j < hashTable[nums[i]].length; j++) {
        if (i - hashTable[nums[i]][j] <= k) {
          return true;
        }
      }
      hashTable[nums[i]].push(i);
    }
  }
  return false;
};

