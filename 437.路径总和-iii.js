/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */

/*
 * 思路: 本质上是一个二叉树的双重循环，和数组的双重循环一样。
 * 拿到当前节点，遍历当前节点的子节点
 * 当前节点子节点遍历完毕之后遍历下一个节点的子节点
 */

var pathSum = function(root, sum) {
	if (root === null) return 0;
    let answer = 0;
    // 第一层遍历 记录二叉树所有的节点
    //TODO 一层遍历的结果可以不用记录 这个变量可以被优化
    let nodeArray = [];
    // 第一层遍历的缓存栈
    let nodeStack = [ root ];
    // 这里进行了第一次遍历 记录了二叉树所有的节点
	while (nodeStack.length) {
        let node = nodeStack.pop();
        // TODO 这里可以做优化 把二层循环嵌进来就不用在开nodeArray数组来占用空间
		nodeArray.push({
			node: node,
			sum: 0
		});
		if (node.left) {
			nodeStack.push(node.left);
		}
		if (node.right) {
			nodeStack.push(node.right);
		}
    }
    // 这里是第二层遍历 从二叉每一个节点开始 再次进行递归遍历
	for (let i = 0; i < nodeArray.length; i++) {
        // 第二层遍历的缓存栈
		let nodeSumStack = [ nodeArray[i] ];
		while (nodeSumStack.length) {
			let nodeWithSum = nodeSumStack.pop();
			let node = nodeWithSum.node;
            let nodeSum = nodeWithSum.sum + node.val;
            // 第二层遍历时 计算路径值 并判断路径值与给定的值是否相同
			if (nodeSum === sum) {
				answer++;
			}
			if (node.left) {
				nodeSumStack.push({
					node: node.left,
					sum: nodeSum
				});
			}
			if (node.right) {
				nodeSumStack.push({
					node: node.right,
					sum: nodeSum
				});
			}
		}
    }
    return answer;
};
// @lc code=end
