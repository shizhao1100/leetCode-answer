/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */

/*
* 方法：hash-table
* 细节：以hash-table来存储中间值，判断新值出现在hash-table中且不为1则返回false;
* 时间复杂度：On
*/
var isHappy = function (n) {
  let hashTable = {};
  hashTable[n] = true;
  while (true) {
    let newValue = 0;
    while (n) {
      newValue = newValue + (n % 10) * (n % 10);
      n = parseInt(n / 10);
    }
    if (newValue === 1) {
      return true;
    }
    if (hashTable[newValue] === true) {
      return false;
    } else {
      hashTable[newValue] = true;
      n = newValue;
    }
  }
};
