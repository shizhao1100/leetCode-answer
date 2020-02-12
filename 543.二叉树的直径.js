/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @way 二叉树的深度优先遍历
 * @from https://leetcode-cn.com/problems/diameter-of-binary-tree/solution/leetcode543-er-cha-shu-de-zhi-jing-by-happy_yuxuan/
 * @description 数一个节点的左子树的深度，右子树的深度。
 * 当前节点的最大 直径 即为左子树的高度+右子树的高度。
 * 当前节点的父节点的最大 半径 即为当前节点 左子树的高度，右子树的高度的最大值+1
 * @result Accepted
 * @O n
 * @time 2020-02-12 17:53:55
 */
var diameterOfBinaryTree = function(root) {
	let max = 0;
	function _diameterOfBinaryTree(node) {
		if (!node) return 0;
		let maxL = _diameterOfBinaryTree(node.left);
		let maxR = _diameterOfBinaryTree(node.right);
		max = Math.max(max, maxL + maxR);
		return Math.max(maxL, maxR) + 1;
	}
	_diameterOfBinaryTree(root);
	return max;
};
// @lc code=end
