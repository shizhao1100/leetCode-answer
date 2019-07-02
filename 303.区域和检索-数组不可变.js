/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */
/**
 * @param {number[]} nums
 */
/*
* ❌ 会超时
* 方法：暴力解
* 细节：直接暴力解 查询时间复杂度为O(n),预计算时间复杂度为O1
* 空间复杂度 O1
*/
var NumArray = function (nums) {
  this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let answer = 0;
  for (let _i = i; _i <= j; _i++) {
    answer = answer + this.nums[_i];
  }
  return answer;
};
/*
* ❌ 会超时
* 方法：全缓存法
* 细节：基于动态规划计算出所有的[i->j]的解，每次sumRange时间复杂度为O0,预计算时间复杂度为1/2*On^2
* 空间复杂度：1/2*On^2
*/
var NumArray = function (nums) {
  if (nums.length === 0) {
    this.sumArray = [[0]];
  } else {
    this.sumArray = [];
    for (let i = 0; i < nums.length; i++) {
      this.sumArray.push(new Array(nums.length - i - 1));
      this.sumArray[i][0] = nums[i];
    }
    let k = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = 1; j < k; j++) {
        this.sumArray[i][j] = this.sumArray[i + 1][j - 1] + this.sumArray[i][0];
      }
      k++;
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sumArray[i][j - i];
};

/*
* 方法：半全缓存法
* 细节：缓存所有0-n的sum值,sumRange(m,n) = sum(n)-sum(m-1)||0;
* 查询时间复杂度为 每次查询的时间 O(1) 预计算时间复杂度为O1
* 空间复杂度：On
*/
var NumArray = function (nums) {
  this.sumArray = [];
  this.sumArray[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.sumArray[i] = this.sumArray[i - 1] + nums[i];
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sumArray[j] - (this.sumArray[i - 1] || 0);
};

