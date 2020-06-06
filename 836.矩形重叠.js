/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/rectangle-overlap/solution/tu-jie-jiang-ju-xing-zhong-die-wen-ti-zhuan-hua-we/
var isRectangleOverlap = function(rec1, rec2) {
    let x_overlap = !(rec2[0] >= rec1[2] || rec2[2] <= rec1[0]);
    let y_overlap = !(rec2[1] >= rec1[3] || rec2[3] <= rec1[1]);
    return x_overlap && y_overlap
};
// @lc code=end
