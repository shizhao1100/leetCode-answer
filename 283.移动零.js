/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
* 方法：双指针
* 细节：快指针找所有非零元素，慢指针找所有元素。当快指针发现非零元素时，将快指针的值赋给慢指针。
* 最后以慢指针为节点，给数组0。
*/
var moveZeroes = function (nums) {
  let notZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    nums[notZero] = nums[i];
    notZero++;
  }
  for (let i = notZero; i < nums.length; i++) {
    nums[i] = 0;
  }
};
/*
* 方法：双指针
* 细节：快指针找所有非零元素，慢指针找0元素，当慢指针找到0元素时与快指针的非零元素做交换。
* 整体思路与上述方法一致，将上述方法的赋值操作改为了交换操作。优化了部分性能。
*/
var moveZeroes = function (nums) {
  let temp = undefined;
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
      if (nums[lastNonZeroFoundAt] != 0) {
        lastNonZeroFoundAt++;
        continue;
      }
      temp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = nums[cur];
      nums[cur] = temp;
      lastNonZeroFoundAt++;
    }
  }
};
