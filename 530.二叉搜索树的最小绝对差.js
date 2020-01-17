/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start

/**
 * @param {TreeNode} root
 * @return {number}
 * @way 前序遍历二叉树
 * @from self
 * @description 二叉搜索树本质上包含序列，只需要前序遍历即可拿到一个递增数列。
 * 拿到递增序列之后即可计算最小插值
 * @result Accepted
 * @O n
 * @time 2020-02-09 20:27:23
 */
var getMinimumDifference = function(root) {
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
