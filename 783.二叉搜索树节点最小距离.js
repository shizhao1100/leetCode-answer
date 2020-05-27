/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function(root) {
	let minAbs = Infinity;
	let pre = Infinity;
	function getTreeNode(node) {
		if (node.left) {
			getTreeNode(node.left);
		}
		if (minAbs > Math.abs(node.val - pre)) {
			minAbs = Math.abs(node.val - pre);
		}
		pre = node.val;
		if (node.right) {
			getTreeNode(node.right);
		}
	}
	getTreeNode(root);
	return minAbs;
};
// @lc code=end
