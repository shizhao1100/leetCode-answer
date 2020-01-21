/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 * 
 * @way 二分查找
 * @from self
 * @description 这个题目是描述的真的不清楚
 * 有一个连续的空间 内部有一些 不连续房屋 有一些暖气 暖气可能在房屋内 也可能不在房屋内
 * 数组1 houses 是无排序的房屋列表
 * 数组2 hearter 是无排序的暖气列表
 * 
 * 先对 数组1 2 进行排序
 * 
 * 给数组2 内部的节点一个半径 使 数组2 覆盖数组1中的值 （不用覆盖全部空间）
 * 
 * 取一个数组1中的值，在数组2中查找离他最近的节点记录 记录所有的最小距离 返回其中最大的值
 * 
 * @result Accepted
 * @O log2n
 * @time 2020-01-20 20:43:02
 */
var findRadius = function (houses, heaters) {
  function getMinDistance(p, targets) {
    let left = 0;
    let right = targets.length - 1;
    let middle = parseInt((right - left) / 2);
    let minDistance = Infinity;
    while (minDistance !== 0 && right >= left) {
      let distance = p - targets[middle];
      if (Math.abs(distance) < minDistance) {
        minDistance = Math.abs(distance);
      }
      if (distance > 0) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
      middle = parseInt((right + left) / 2);
    }
    return minDistance;
  };
  let minDistance = [];
  houses.sort(function (a, b) { return a - b });
  heaters.sort(function (a, b) { return a - b });
  for (let i = 0; i < houses.length; i++) {
    minDistance.push(getMinDistance(houses[i], heaters));
  }
  let max = -Infinity;
  for (let i = 0; i < minDistance.length; i++) {
    if (max < minDistance[i]) {
      max = minDistance[i];
    }
  }
  return max;
};
// @lc code=end

