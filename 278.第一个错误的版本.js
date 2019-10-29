/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function isBadVersion(n) {
    if (n >= 1) {
        return true
    } else {
        return false;
    }
}
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let notBad = 0;
        let bad = n;
        while (bad - notBad > 1) {
            let mid = parseInt((bad + notBad) / 2);
            if (isBadVersion(mid)) {
                bad = mid;
            } else {
                notBad = mid;
            }
        }
        return bad;
    };
};