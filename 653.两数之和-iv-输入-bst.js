/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
/**
 * @way 双重遍历二叉树
 * @from self
 * @description 第一层层次遍历二叉树，求出当前节点的期望值
 * 在第二层遍历中 根据二叉搜索树的性质 搜索期望值
 * 
 * 缺点为 
 * 第二层遍历时每次都是从根节点开始遍历的 
 * 当前节点会再次被返回 即 输入值为 [1],2 是会返回真
 * 第二层遍历节点时需要返回该节点 用于判断是否是重复节点相加
 * 
 * @result Accepted
 * @O nLog2n
 * @time 2020-03-20 14:11:39
 */
var findTarget = function (root, k) {
  if (!root) return false
  function searchVal(node, k) {
    if (!node) {
      return false;
    }
    if (node.val === k) {
      return node;
    } else if (node.val < k) {
      return searchVal(node.right, k);
    } else {
      return searchVal(node.left, k);
    }
  }
  let nodeStack = [root];
  while (nodeStack.length) {
    let node = nodeStack.pop();
    let nodeValue = node.val;
    let extendsValue = k - nodeValue;
    let extendsNode = searchVal(root, extendsValue);
    if (extendsNode && node !== extendsNode) {
      return true;
    }
    if (node.left) {
      nodeStack.push(node.left);
    }
    if (node.right) {
      nodeStack.push(node.right);
    }
  }
  return false
};

/**
 * @way 基于hashTable
 * @from leetcode
 * @description 遍历二叉树将值写入一个hashTable
 * 遍历hashTable查找节点
 * @result Accepted
 * @O n
 * @time 2020-03-20 14:11:39
 */
var findTarget = function (root, k) {
  if (!root) return false
  let nodeStack = [root];
  let hashTable = {};
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
  for (let key in hashTable) {
    if ((k - Number(key)) === Number(key)) {
      if (hashTable[k - key] >= 2) {
        return true
      }
    } else if (hashTable[k - key]) {
      return true
    }
  }
  return false
};

/**
 * @way 双指针
 * @from leetcode
 * @description 中序遍历二叉树拿到排序的数组
 * 左指针指向开始，右指针指向结束，判断两节点和是否与给出值相同
 * 较大则右指针向左移动
 * 较小则左指针向右移动
 * 指向同一节点时返回false
 * @result Accepted
 * @O n
 * @time 2020-03-20 14:11:39
 */
var findTarget = function (root, k) {
  if (!root) return false;
  let numList = [];
  function eachNode(node) {
    if (node.left) {
      eachNode(node.left);
    }
    numList.push(node.val);
    if (node.right) {
      eachNode(node.right)
    }
  };
  eachNode(root);
  let start = 0;
  let end = numList.length - 1;
  while (end > start) {
    if (numList[end] + numList[start] === k) {
      return true;
    } else if (numList[end] + numList[start] < k) {
      start++;
    } else {
      end--;
    }
  }
  return false
};
// @lc code=end

