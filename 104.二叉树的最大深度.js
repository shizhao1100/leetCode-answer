/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

/*
* 方法: 递归法
*/
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/*
* 方法: 迭代法
* 细节：层次遍历,跟随树维护一个节点深度数据
*/
var maxDepth = function (root) {
  let stack = [];
  let DepthNode = function (node, depth) {
    this.node = node;
    this.depth = depth
  }
  if (root !== null) {
    let depth = 1;
    root.depth = 1;
    stack.push(new DepthNode(root, 1));
    while (stack.length) {
      const node = stack.pop();
      if (node.node.left) {
        depth = Math.max(depth, node.depth + 1);
        stack.push(new DepthNode(node.node.left, node.depth + 1));
      }
      if (node.node.right) {
        depth = Math.max(depth, node.depth + 1);
        stack.push(new DepthNode(node.node.right, node.depth + 1));
      }
    }
    return depth;
  } else {
    return 0;
  }
};

