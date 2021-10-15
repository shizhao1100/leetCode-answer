/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let hashNum = {};
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let arrN = i.toString().split("");
    for (let j = 0; j < arrN.length; j++) {
      sum += parseInt(arrN[j], 10);
    }
    if (hashNum[sum]) {
      hashNum[sum].push(i);
    } else {
      hashNum[sum] = [i];
    }
  }
  let answer = 0;
  let keys = Object.keys(hashNum);
  let hashLength = {};
  for (let i = 0; i < keys.length; i++) {
    if (hashLength[hashNum[keys[i]].length]) {
      hashLength[hashNum[keys[i]].length]++;
    } else {
      hashLength[hashNum[keys[i]].length] = 1;
    }
  }
  let hashLengthKeys = Object.keys(hashLength);
  let max = -Infinity;
  for (let i = 0; i < hashLengthKeys.length; i++) {
    if (max < parseInt(hashLengthKeys[i])) {
      max = hashLengthKeys[i];
      answer = hashLength[hashLengthKeys[i]];
    }
  }
  return answer;
};

// @lc code=end
