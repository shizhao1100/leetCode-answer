/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let answer = 0;
  if (points.length <= 1) return answer
  let prePoint = points[0]
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - prePoint[0];
    const dy = points[i][1] - prePoint[1];
    answer += Math.max(Math.abs(dx), Math.abs(dy))
    prePoint = points[i]
  }
  return answer
};
// @lc code=end

