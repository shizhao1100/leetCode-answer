/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
	let hashTable = {};
    let nodeStack = [ root ];
    if(!root) return [];
	while (nodeStack.length) {
		let node = nodeStack.pop();
		if (hashTable[node.val]) {
			hashTable[node.val]++;
		} else {
			hashTable[node.val] = 1;
		}
		if (node.left) {
			nodeStack.push(node.left);
		}
		if (node.right) {
			nodeStack.push(node.right);
		}
	}
	let values = Object.keys(hashTable);
	let maxValueCount = 0;
	let answer = [];
	for (let i = 0; i < values.length; i++) {
		if (hashTable[values[i]] > maxValueCount) {
            maxValueCount = hashTable[values[i]];
            answer = [ values[i] ];
            continue;
		}
		if (hashTable[values[i]] === maxValueCount) {
			answer.push(values[i]);
		}
	}
	return answer;
};
// @lc code=end
