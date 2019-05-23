/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/*
 * 解法: 分治法 
 * 思路：搜索数组的中位作为根节点构建二叉树，原数组去掉中位数之后生成两个数组，继续寻找中位数作为子树的根节点。
 */


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/*
 * 解法: 分治法 
 * 思路：搜索数组的中位作为根节点构建二叉树，原数组去掉中位数之后生成两个数组，继续寻找中位数作为子树的根节点。
 * 细节：采用一个队列来维护 数组在顺序 采用这个树顺序的数组，从根节点直接写入树，相对来说降低了setTreeNode方法的难度，但需要维护一个队列。
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  function Node(start, end) {
    this.start = start;
    this.end = end;
  }
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  function setTreeNode(val, tree) {
    if (tree.left === null && tree.val > val) {
      tree.left = new TreeNode(val);
    }
    else if (tree.right === null && tree.val < val) {
      tree.right = new TreeNode(val);
    }
    else if (tree.left !== null && tree.val > val) {
      setTreeNode(val, tree.left);
    }
    else if (tree.right !== null && tree.val < val) {
      setTreeNode(val, tree.right);
    }
  }

  const len = nums.length;
  let lenList = [];
  let lenStack = [new Node(0, len - 1)];

  while (lenStack.length) {
    let node = lenStack.shift();
    if (node.end - node.start > 1) {
      lenStack.push(new Node(node.start, Math.round((node.end + node.start) / 2) - 1));
      lenStack.push(new Node(Math.round((node.end + node.start) / 2) + 1, node.end));
    } else if (node.end - node.start === 1) {
      lenStack.push(new Node(node.start, Math.round((node.end + node.start) / 2) - 1));
    }
    lenList.push(Math.round((node.end + node.start) / 2));
  }

  let tree = new TreeNode(nums[lenList[0]]);

  for (let i = 1; i < lenList.length; i++) {
    setTreeNode(nums[lenList[i]], tree);
  }
  return tree;
};
