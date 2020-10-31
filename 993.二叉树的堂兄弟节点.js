/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (!root) return false;
    let nodeX = { depth: undefined, father: undefined };
    let nodeY = { depth: undefined, father: undefined };
    let findedX = false;
    let findedY = false;
    let stack = [{ node: root, father: null, depth: 0 }];
    while (stack.length && !(findedY && findedX)) {
        let { node, father, depth } = stack.pop();
        if (node.val === x) {
            nodeX.depth = depth + 1;
            nodeX.father = father;;
        }
        else if (node.val === y) {
            nodeY.depth = depth + 1;
            nodeY.father = father;;
        }
        if (node.left) {
            stack.push({ node: node.left, father: node, depth: depth + 1 })
        }
        if (node.right) {
            stack.push({ node: node.right, father: node, depth: depth + 1 })
        }
    }
    if (nodeX.depth === nodeY.depth && nodeX.father !== nodeY.father) {
        return true
    }
    return false
};
// @lc code=end

