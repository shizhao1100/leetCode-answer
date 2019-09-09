/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
/*
* 方法：循环法
* 细节：一直加 直到小于10
*/
var addDigits = function (num) {
  let answer = num;
  while (answer >= 10) {
    let answerString = answer.toString();
    answer = 0;
    for (let i = 0; i < answerString.length; i++) {
      answer = answer + parseInt(answerString[i]);
    }
  }
  return answer;
};
/*
* 方法：数学法
* 细节：一直加 直到小于10
*/
var addDigits = function (num) {
  return (num - 1) % 9 + 1;;
};

