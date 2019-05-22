/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  }
}

// 递归法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var answer = [];
  function _inorderTraversa(root) {
    if (root.left != null) {
      _inorderTraversa(root.left);
    }
    answer.push(root.val);
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
var inorderTraversal = function (root) {
  var answer = [];
  var stack = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    answer.push(node.val);
    if (node.right !== null) {
      root = node.right;
    }
  }
  return answer;
};
inorderTraversal(root);

