/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 递归法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var answer = [];
  function _inorderTraversa(root) {
    answer.push(root.val);
    if (root.left != null) {
      _inorderTraversa(root.left);
    }
    if (root.right != null) {
      _inorderTraversa(root.right);
    }
  }
  if (root != null) {
    _inorderTraversa(root);
  }
  return answer;
};

// 迭代法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var answer = [];
  var stack = [];
  while (root || stack.length !== 0) {
    if (root) {
      answer.push(root.val);
    }
    if (root.right !== null) {
      stack.push(root.right);
    }
    if (root.left !== null) {
      stack.push(root.left);
    }
    root = stack.pop();
  }
  return answer;
};
