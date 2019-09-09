/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  let answer = [];
  let nodeListWithPath = {
    node: root,
    path: root.val.toString()
  };
  let nodeStack = [nodeListWithPath];
  while (nodeStack.length) {
    let node = nodeStack.pop();
    if (node.node.right) {
      nodeStack.push({
        node: node.node.right,
        path: node.path + '->' + node.node.right.val
      })
    }
    if (node.node.left) {
      nodeStack.push({
        node: node.node.left,
        path: node.path + '->' + node.node.left.val
      })
    }
    if (!node.node.right && !node.node.left) {
      answer.push(node.path);
    }
  }
  return answer;
};
