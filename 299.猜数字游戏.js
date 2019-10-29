/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
/*
* 方法：hashTable
* 细节：
* 由于猜的数字只包括0~9这九位数字，因此我们可以定义两个10位数组来存储某个数出现的次数，索引代表数值，索引处的值代表次数。
* 思路如下：先遍历一次字符串，如果字符相等，公牛数加一，否则，将它们对应的数组中的次数加一。
* 第一次遍历完毕后可以得到两个数组，分别对应了两个字符串中某一个数出现的次数(匹配的字符不算)，然后我们可以再进行一次遍历，两个数组每一个索引处的最小值相加即可得到母牛数。
* 时间复杂度：On
*/
var getHint = function (secret, guess) {
  let a = 0;
  let b = 0;
  let secretCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let guessCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a++;
    }
    else {
      secretCount[secret[i]]++;
      guessCount[guess[i]]++;
    }
  }
  for (let i = 0; i < 10; i++) {
    b = b + Math.min(guessCount[i], secretCount[i]);
  }
  return `${a}A${b}B`
};
/*
* 方法：hashTable
* 细节：
* 第一次遍历完毕后进行第二次遍历，此时的array中是猜的字符串中没有对上号的字符，依次获取array中的字符，看HashMap中是否有该字符，如果有，则让"母牛数"加一，然后将该字符的次数减一，如果该字符在Map中的次数为零则清除。
* 时间复杂度：On
*/
var getHint = function (secret, guess) {
  let a = 0;
  let b = 0;
  let hashTable = {}
  let checkedList = [];
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a++;
      checkedList.push(i);
    }
    else {
      if (hashTable[secret[i]] === undefined) {
        hashTable[secret[i]] = [i];
      } else {
        hashTable[secret[i]].push(i);
      }
    }
  }
  for (let i = 0; i < secret.length; i++) {
    if (i === checkedList[0]) {
      checkedList.shift();
      continue;
    } else {
      if (hashTable[guess[i]] && hashTable[guess[i]].length) {
        hashTable[guess[i]].pop();
        b++;
      }
    }
  }
  return `${a}A${b}B`
};
// @lc code=end

