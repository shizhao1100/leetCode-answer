/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  S = S.replace(/-/g, '').toUpperCase();
  let firstCount = S.length % K;
  let count = parseInt(S.length / K);
  let i = 0;
  if (firstCount !== 0 && count !== 0) {
    S = S.slice(0, firstCount) + '-' + S.slice(firstCount);
    i++
  } else {
    firstCount = K;
    count--;
  }
  for (; i < count; i++) {
    S = S.slice(0, firstCount + i * (K + 1))
      + '-' + S.slice(firstCount + i * (K + 1));
  }
  return S;
};
// @lc code=end

