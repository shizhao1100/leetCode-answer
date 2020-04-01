/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
// TODO 递归思维还需要加强
var trimBST = function (root, L, R) {
  if (!root) return null
  if (root.val < L) return trimBST(root.right, L, R)
  if (root.val > R) return trimBST(root.left, L, R)

  root.left = trimBST(root.left, L, root.val)
  root.right = trimBST(root.right, root.val, R)
  return root;
};
// @lc code=end

