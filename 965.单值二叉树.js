/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
	if (!root) return true;
	let val = root.val;
	let stack = [ root ];
	while (stack.length) {
		let node = stack.pop();
		if (node.val !== val) {
			return false;
		}
		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
		}
	}
	return true;
};
// @lc code=end
