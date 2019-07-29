/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
/*
* 方法：hash-table
* 细节：维护一个0-n的boolen数组，差一个数则给他的倍数都赋值true，每次判断先查表在判断
* 余数计算0-sqrt(n)就可以，sqrt(n)内没有则肯定没有。
*/
var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  let hashArray = new Array(n - 1);
  let answer = 0;
  for (let i = 2; i < n; i++) {
    if (!hashArray[i]) {
      let j = 2;
      let halfI = parseInt(Math.sqrt(i));
      for (j = 2; j <= halfI; j++) {
        if (i % j == 0) {
          break;
        }
      }
      if (j === halfI + 1) {
        answer = answer + 1;
      }
      for (let k = 1; k * i < n; k++) {
        hashArray[k * i] = true;
      }
    }
  }
  return answer;
};
