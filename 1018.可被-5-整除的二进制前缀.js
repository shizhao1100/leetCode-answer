/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */

/**
 * @way 暴力
 * @from self
 * @description 不过脑子的直接转10进制对5取余
 * @result Wrong Answer(2进制字符串可能非常长)
 * @O
 * @time 2020-12-25 10:42:25
 */
var prefixesDivBy5 = function (A) {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    const valueString = A.slice(0, i + 1)
      .toString()
      .replace(/,/g, "");
    const value10 = parseInt(valueString, 2);
    if (value10 % 5 === 0) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
};

/**
 * @way 保留个位
 * @from self
 * @description 能不能整除5取决于个位是不是5或者0与高位无关所以只需要判断个位即可,迭代判断大于10则取余。 左移+当前位末尾的值即保证个位数无污染。
 * @result
 * @O
 * @time 2020-12-25 10:42:25
 */
var prefixesDivBy5 = function (A) {
  let answer = [];
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num <<= 1;
    num += A[i];
    num %= 10;
    answer.push(num % 5 == 0);
  }
  return answer;
};
// @lc code=end
