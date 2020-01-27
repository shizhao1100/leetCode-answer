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
        } else {
          result.push(i + ':0' + j);
        }
      }
    }
  }
  return result;
};

/**
 * @param {number} num
 * @return {string[]}
 * @way 回溯法
 * @from self
 * @description 回溯本质上是一个递归，传两个变量进去，
 * 一个维护当前值的状态，用于记录和返回最终状态，
 * 一个维护当前进行到哪一步，用于边界判断，执行到哪一步之后退出
 * 每个步骤 修改当前值记录状态，进入下一个状态。
 * 退出时回溯当前状态。
 * 
 * 由于 时间为 小时为 0-11 分钟为 0-59 所以还需要对结果进行剪枝 
 * 
 * @result Accepted
 * @O Cm n
 * @time 2020-01-28 02:14:20
 */

var readBinaryWatch = function (num) {
  let timeStatus = [];
  let results = [];
  // start 记录当前进行状态 与 num 进行比对判断边界
  // timeStatusNow 用于记录当前值状态
  function getTimeStatus(num, start, timeStatusNow) {
    if (num === 0) {
      timeStatus.push([].concat(timeStatusNow));
      return;
    }
    for (let i = start; i < 10; i++) {
      timeStatusNow[i] = true;
      // 修改当前值 进入一个状态
      getTimeStatus(num - 1, i + 1, timeStatusNow);
      // 回溯当前值
      timeStatusNow[i] = false;
    }
  }
  function format(timeStatus) {
    let hour = 0;
    let time = 0;
    for (let i = 0; i < 4; i++) {
      if (timeStatus[i]) {
        hour = hour + Math.pow(2, i);
      }
    }
    for (let i = 4; i < timeStatus.length; i++) {
      if (timeStatus[i]) {
        time = time + Math.pow(2, i - 4);
      }
    }
    if (time < 10) {
      time = '0' + time;
    }
    // TODO 在这里做的异常值判断 并不是真是的剪枝操作。所以有一定的空间浪费
    if (time > 59 || hour > 11) {
      return undefined;
    }
    return `${hour}:${time}`;
  }

  getTimeStatus(num, 0, [false, false, false, false, false, false, false, false, false, false])
  for (let i = 0; i < timeStatus.length; i++) {
    let result = format(timeStatus[i]);
    if (result !== undefined)
      results.push(result);
  }
  return results;
}
  // @lc code=end

