/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  if (!root) return 0;
  const getNode = function (node) {
    if (node === null) return 0
    let leftValue = getNode(node.left);
    let rightValue = getNode(node.right);
    let dp = Math.abs(leftValue - rightValue);
    answer = answer + dp;
    return leftValue + rightValue + node.val;
  }
  let answer = 0;
  getNode(root);
  return answer;
};
// @lc code=end

