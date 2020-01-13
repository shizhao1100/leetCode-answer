/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @way 1 倍增法 
 * @description 如果字符串s内部是循环的 即 s + s 内部循环周期肯定小于s.length
 * 即 从 (s + s) 中从1开始查找 s 即可查循环周期为 (s + s).indexOf(s,1)
 * 如果循环周期等于s.length即 s 内部无循环 否则则内部包含循环
 * @result Accepted
 * @from https://leetcode-cn.com/problems/repeated-substring-pattern/solution/c-yi-xing-ti-jie-by-da-li-wang-3/
 * @O O(m+n) 本质上是一个kmp算法
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).indexOf(s, 1) !== s.length;
}

/**
 * @way 2 暴力法
 * @description 以一个游标从1开始截取子串 循环判断字符串内部是否都是字串
 * @result Accepted
 * @O n^3
 * @from self
 * @time 2020-01-13 11:19:00
 */
var repeatedSubstringPattern = function (s) {
  let point = 1;
  let answer = false;
  while (point <= s.length / 2) {
    for (let i = point; i < s.length; i = i + point) {
      let status = true;
      let j = 0;
      for (; j < point; j++) {
        if (s[i + j] !== s[j]) {
          status = false;
          break;
        }
      }
      if (!status) {
        break;
      }
      if ((i + j) === s.length) {
        answer = true;
      }
    }
    point++;
  }
  return answer;
}
/**
 * @way 3 公式推导
 * @from https://leetcode-cn.com/problems/repeated-substring-pattern/solution/guan-yu-gou-zao-ssjin-xing-pan-duan-de-zheng-ming-/
 * @description 假设 字符串 s 由 n 个子串构成 题目要求n>1为true n=1为false
 * 现在 令 sd = s + s 即 sd 由 2n 个子串构成 现在 sd 掐头去尾 sd_sub = sd.substr(1,sd.length-2)
 * 即 sd_sub 由 2n-2 个子串构成
 * 即 证明 2n-2 > 0 即可
 * 即 sd_sub 里是否包含 s
 * 即 sd_sub.indexOf(s) !== -1
 * @result Accepted
 * @O m+n 本质上是一个kmp算法
 * @time 2020-01-13 11:37:52
 */
var repeatedSubstringPattern = function (s) {
  let s_double = s + s;
  let s_double_sub = s_double.substr(1, s_double.length - 2);
  return s_double_sub.indexOf(s) !== -1;
}
/**
 * @way 4 周期判断法
 * @from https://leetcode-cn.com/problems/repeated-substring-pattern/solution/cppjie-fa-zhou-qi-chuan-by-brianyi/
 * @description 周期串为s,那么设定t表示周期,值在[1,len(s)-1]的范围,那么剩下的就是依次对每个t值进行遍历看是否真的满足周期为t,数学中周期的表达式是
 * f(x+t)=f(x)
 * 即 s[j % i] === s[j]
 * @result Accepted
 * @O n^2
 * @time 2020-01-13 15:54:23
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i < s.length; i++) {
    if (s.length % i !== 0) {
      continue;
    }
    for (let j = i; j < s.length; j++) {
      if (s[j % i] !== s[j]) {
        break;
      }
      if (j === s.length - 1) {
        return true;
      }
    }
  }
  return false;
}
// @lc code=end

