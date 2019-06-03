/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
/*
* 方法: 迭代法
* 细节：层次遍历,跟随树维护一个节点深度数据
*/
var levelOrderBottom = function (root) {
  let DepthNode = function (node, depth) {
    this.node = node;
    this.depth = depth
  }
  let stack = [];
  let answer = [];
  if (root !== null) {
    let node = stack.push(new DepthNode(root, 0));
    while (stack.length) {
      let node = stack.pop();
      if (!Array.isArray(answer[node.depth])) {
        answer[node.depth] = new Array();
      }
      answer[node.depth].push(node.node.val);
      if (node.node.right) {
        stack.push(new DepthNode(node.node.right, node.depth + 1));
      }
      if (node.node.left) {
        stack.push(new DepthNode(node.node.left, node.depth + 1));
      }
    }
    return answer.reverse();
  } else {
    return [];
  }
};
