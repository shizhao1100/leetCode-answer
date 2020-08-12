/*
 * @lc app=leetcode.cn id=938 lang=typescript
 *
 * [938] 二叉搜索树的范围和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
	left: TreeNode | null;
	right: TreeNode | null;
	val: number;
}
function beforeEach(node: TreeNode, fun: Function): void {
	if (node.left) {
		beforeEach(node.left, fun);
	}
	fun(node.val);
	if (node.right) {
		beforeEach(node.right, fun);
	}
}
function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
	if (!root) return 0;
	let answer = 0;
	const sum = function(n: number): void {
		if (L <= n && n <= R) {
			answer = answer + n;
		}
	};
	beforeEach(root, sum);
	return answer;
}
// @lc code=end
