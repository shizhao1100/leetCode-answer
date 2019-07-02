/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
* 方法：暴力解
* 细节：时间复杂度On^2
*/
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};
/*
* 方法：双指针
* 细节：利用两个指针，往中间收拢查找。 头+尾<target 则头指针向后移动 >target怎尾指针向前移动
* 时间复杂度：O^n
*/
var twoSum = function (numbers, target) {
  let start_p = 0;
  let end_p = numbers.length - 1;
  // 该题 已确定有解
  while (numbers[start_p] + numbers[end_p] !== target) {
    if (numbers[start_p] + numbers[end_p] > target) {
      end_p--;
    } else {
      start_p++;
    }
  }
  return [start_p + 1, end_p + 1];
};
