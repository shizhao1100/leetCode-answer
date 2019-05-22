/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  var answer = [];
  function _inorderTraversa(root) {
    if (root.left != null) {
      _inorderTraversa(root.left);
    }
    if (root.right != null) {
      _inorderTraversa(root.right);
    }
    answer.push(root.val);
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
var postorderTraversal = function (root) {
  var answer = [];
  var stack = [];
  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      answer.unshift(root.val);
      root = root.right;
    }
    root = stack[stack.length - 1];
    stack.pop();
    root = root.left;
  }
  return answer;
};

