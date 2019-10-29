/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
* 方法：直接查找
* 细节：第一个和第二和···第N个比对
* 时间复杂度：On^2
*/
var containsDuplicate = function (nums) {

};
/*
* 方法：排序
* 细节：对数组进行排序，快排Onlog(n)，再对已排序的数组过一遍。
* 时间复杂度：Onlog(n)
*/
var containsDuplicate = function (nums) {

};
/*
* 方法：hash-table
* 细节：维护一个hash-table来记录已有的数据信息
* 时间复杂度：On
*/
var containsDuplicate = function (nums) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

