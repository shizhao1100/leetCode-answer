/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let stack = [root];
    root.realVal = root.val;
    let answer = 0;
    while (stack.length) {
      let node = stack.pop();
      if (node.left) {
        node.left.realVal = node.realVal << 1;
        node.left.realVal += node.left.val;
        stack.push(node.left);
      }
      if (node.right) {
        node.right.realVal = node.realVal << 1;
        node.right.realVal += node.right.val;
        stack.push(node.right);
      }
      if (!node.left && !node.right) {
        answer += node.realVal;
      }
    }
    return answer;
};
// @lc code=end

