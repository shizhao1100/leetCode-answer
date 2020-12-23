/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 */

// @lc code=start
/**
 * @param {number} N
 * @return {boolean}
 */

/**
 * @way 找规律
 * @from
 * @description 是的这是一个找规律的题目，具体怎么找的见下文
 * @result
 * @O
 * @time 2020-12-25 15:39:42
 */
var divisorGame = function (N) {
  return N % 2 == 0;
};

/**
 * @way 递推
 * @from
 * @description
 * N=1 的时候，区间 (0, 1)(0,1) 中没有整数是 n 的因数，所以此时 Alice 败。
 * N = 2的时候，Alice 只能拿 11，N 变成 11，Bob 无法继续操作，故 Alice 胜。
 * N = 3的时候，Alice 只能拿 11，N 变成 22，根据 N = 2 的结论，我们知道此时 Bob 会获胜，Alice 败。
 * N = 4的时候，Alice 能拿 11 或 22，如果 Alice 拿 11，根据 N = 3的结论，Bob 会失败，Alice 会获胜。
 * N = 5的时候，Alice 只能拿 11，根据 N = 4的结论，Alice 会失败。
 * 所以可以从正项 从1递推到N
 * @result
 * @O
 * @time 2020-12-25 15:39:42
 */
var divisorGame = function (N) {
  let f = [0, false, true];
  for (let i = 3; i <= N; ++i) {
    for (let j = 1; j < i; ++j) {
      if (i % j == 0 && !f[i - j]) {
        f.push(true);
        break;
      } else {
        f.push(false);
        break;
      }
    }
  }
  return f[N];
};
// @lc code=end
