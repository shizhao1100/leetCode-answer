/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 * @way 递归
 * @from self
 * @description 
 * @result Accepted
 * @O n
 * @time 2020-03-02 03:27:41
 */
var preorder = function(root) {
	if (!root) return [];
	let answer = [];
	const _preorder = function(node) {
		answer.push(node.val);
		if (node.children) {
			for (let i = 0; i < node.children.length; i++) {
				_preorder(node.children[i]);
			}
		}
	};
	_preorder(root);
	return answer;
};

/**
 * @param {Node} root
 * @return {number[]}
 * @way 迭代
 * @from self
 * @description 
 * @result Accepted
 * @O n
 * @time 2020-03-02 03:27:41
 */
var preorder = function(root) {
	if (!root) return [];
	let answer = [];
	let stack = [ root ];
	while (stack.length) {
		let node = stack.pop();
		answer.push(node.val);
		if (node.children) {
			for (let i = node.children.length - 1; i >= 0; i--) {
				stack.push(node.children[i]);
			}
		}
	}
	return answer;
};
// @lc code=end
