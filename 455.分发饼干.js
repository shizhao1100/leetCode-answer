/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/*
* 方法：贪心算法
* 细节：先对g和s进行排序，以最小的s满足最小的g，即为最优解。
* 时间复杂度：On
*/
var findContentChildren = function (g, s) {
  const sortFunction = (a, b) => {
    return a - b;
  }
  g.sort(sortFunction);
  s.sort(sortFunction);
  let k = 0;
  let answer = 0;
  for (let i = 0; i < g.length; i++) {
    if (g[i] <= s[k]) {
      answer++;
    } else {
      i--;
    }
    if (k >= s.length - 1) {
      break;
    }
    k++;
  }
  return answer;
}
