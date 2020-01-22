/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 * 
 * @way 逆推法
 * @from https://leetcode-cn.com/problems/binary-watch/solution/jian-dan-yi-li-jie-de-golangdai-ma-by-a-bai-152/
 * @description 直接判断0:00-12:59每个时间里有几个1
 * @result Accepted
 * @O 720
 * @time 2020-01-22 16:59:15
 */
var readBinaryWatch = function (num) {
  let result = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      let lightNum = i.toString(2).replace(/0/g, '').length + j.toString(2).replace(/0/g, '').length;
      if (lightNum === num) {
        if (j >= 10) {
          result.push(i + ':' + j);
        }else{
          result.push(i + ':0' + j);
        }
      }
    }
  }
  return result;
};
  // @lc code=end

