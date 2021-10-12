/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
/**
 * @way
 * @from
 * @description 暴力解
 * @result
 * @O
 * @time 2021-10-16 04:06:38
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let answer = 0;
  for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) > d) continue;
      flag = false;
      break;
    }
    if (flag) answer++;
  }
  return answer;
};

/**
 * @way
 * @from
 * @description 排序加二分
 * @result
 * @O
 * @time 2021-10-16 04:06:38
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let answer = 0;
  const sortedArr2 = arr2.sort((a, b) => a - b);
  const binarySearch = function (sortedArr, left, right, target) {
    let middle = parseInt((left + right) / 2, 10);
    while (left <= right) {
      if (sortedArr[middle] === target) {
        return middle;
      } else if (sortedArr[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
      middle = parseInt((left + right) / 2, 10);
    }
    return middle;
  };
  for (let i = 0; i < arr1.length; i++) {
    const middleArr2 = binarySearch(
      sortedArr2,
      0,
      sortedArr2.length - 1,
      arr1[i]
    );
    if (Math.abs(arr1[i] - sortedArr2[middleArr2]) > d) {
      if (sortedArr2[middleArr2 + 1] === undefined) answer++;
      else if (Math.abs(arr1[i] - sortedArr2[middleArr2 + 1]) > d) {
        if (sortedArr2[middleArr2 + 2] === undefined) answer++;
        else if (Math.abs(arr1[i] - sortedArr2[middleArr2 + 2]) > d) {
          answer++;
        }
      }
    }
  }
  return answer;
};
// @lc code=end
