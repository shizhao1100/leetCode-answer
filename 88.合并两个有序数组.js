/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
* 细节：去除nums1不必要的元素,再将nums1和nums2 merge
* 细节：splice 是个On的 while 套 On 时间复杂度 On^2
*/
var merge = function (nums1, m, nums2, n) {
  let key = 0;
  const d_len = nums1.length - m;
  for (let i = 0; i < d_len; i++) {
    nums1.pop();
  }
  while (nums2.length) {
    if (nums1[key] < nums2[0]) {
      key++;
      continue;
    } else {
      nums1.splice(key, 0, nums2.shift());
    }
  }
};

/*
* 细节：由于nums1 空间足够n+m 即可以采用倒序插入的方式 比较nums1 和 nums2中最后一位的大小 插入nums[m+n]位
*/
var merge = function (nums1, m, nums2, n) {
  let i = m + n;
  while (m || n) {
    if ((nums1[m - 1] > nums2[n - 1]) || n == 0) {
      nums1[i - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[i - 1] = nums2[n - 1];
      n--;
    }
    i--;
  }
};
