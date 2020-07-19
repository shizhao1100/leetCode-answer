/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
function beforEach(node, nodelist) {
  if (node.left) {
    beforEach(node.left, nodelist)
  }
  nodelist.push(node.val)
  if (node.right) {
    beforEach(node.right, nodelist)
  } else {
  }
}

var increasingBST = function (root) {
  let nodeList = []
  beforEach(root, nodeList);
  let tree = answer = {};
  for (let i = 0; i < nodeList.length; i++) {
    answer.val = nodeList[i]
    answer.left = null;
    if (i === nodeList.length - 1) {
      answer.right = null
    } else {
      answer.right = {}
      answer = answer.right;
    }
  }
  return tree;
};
// @lc code=end

