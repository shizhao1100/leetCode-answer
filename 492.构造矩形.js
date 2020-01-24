/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 * @way 
 * @from https://leetcode-cn.com/problems/construct-the-rectangle/solution/dui-zhe-ge-shu-kai-fang-ran-hou-wang-shang-di-zeng/
 * @description 对这个数开方，然后往下递减，遇到第一个可以整除的，就是最好的结果，且为宽度
 * 为什么要开方：题中要求找到L,W最相近的结果，那么最理想的情况是这个数可以开方，L=W，当他不能开方的时候，找到最接近平方根的数应该就是结果
 * 为什么往下递减第一个可以整除的是宽度：因为L>W
 * 为什么向下递减：由于int是向下取整，如果选择向上递增的时候会出现问题，如输入2，开方取整后得到1,这里由于直接可以整除了，不会进入到+1那一步，所以L和W会取反，如果向下递减则不需要判断这种边界条件
 * @result Accepted
 * @O 1
 * @time 2020-01-26 11:46:16
 */
var constructRectangle = function (area) {
  let W = parseInt(Math.sqrt(area), 10);
  while (area % W !== 0) {
    W--;
  }
  return [area / W, W];
};
// @lc code=end

