/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/*
* 方法: 迭代法
*/
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let stack = [root];
  while (stack.length) {
    let node = stack.shift();
    let tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return root;
};
/*
* 方法: 递归法
*/
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  return root;
};
