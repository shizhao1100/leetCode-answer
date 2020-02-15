/*
 * @lc app=leetcode.cn id=558 lang=javascript
 *
 * [558] 四叉树交集
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  //都为叶子节点、只有一个为叶子节点、都不为叶子节点
  if (quadTree1.isLeaf && quadTree2.isLeaf) {
    var node = new Node(quadTree1.val || quadTree2.val, true, null, null, null, null);
    return node;
  } else if (quadTree1.isLeaf && !quadTree2.isLeaf) {
    if (quadTree1.val) {
      return quadTree1;
    } else {
      return quadTree2;
    }
  } else if (!quadTree1.isLeaf && quadTree2.isLeaf) {
    if (quadTree2.val) {
      return quadTree2;
    } else {
      return quadTree1;
    }
  } else {
    var node = new Node(false, false, null, null, null, null);
    node.topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
    node.topRight = intersect(quadTree1.topRight, quadTree2.topRight);
    node.bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    node.bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
    //当子节点都为叶子节点，区域值相同，终止递归
    if (node.topLeft.isLeaf
      && node.topRight.isLeaf
      && node.bottomLeft.isLeaf
      && node.bottomRight.isLeaf
      && node.topLeft.val === node.topRight.val
      && node.topRight.val === node.bottomLeft.val
      && node.bottomLeft.val === node.bottomRight.val) {
      node = node.topLeft;
    }
    return node;
  }
};
// @lc code=end

