/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
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
 * @time 2020-03-03 03:06:52
 */
var postorder = function (root) {
  if (!root) return [];
  let answer = [];
  const _postorder = function (node) {
    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        _postorder(node.children[i]);
      }
    }
    answer.push(node.val);
  }
  _postorder(root);
  return answer;
};



/**
 * @param {Node} root
 * @return {number[]}
 * @way 取巧法
 * @from self
 * @description 本质上是一个先序遍历，完了再转置的结果。
 * @result Accepted
 * @O n
 * @time 2020-03-03 03:06:52
 */
var postorder = function (root) {
  if (!root) return [];
  let answer = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    answer.push(node.val);
    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
      }
    }
  }
  return answer.reverse();
};
/**
 * @param {Node} root
 * @return {number[]}
 * @way 真 迭代 后续遍历
 * @from self
 * @description 构建了另外一套树结构，对这套树结构进行修改以避免对
 * 原有树结构进行修改，通过对子节点的判断以实现后续遍历
 * @result Accepted
 * @O n
 * @time 2020-03-03 03:06:52
 */
var postorder = function (root) {
  if (!root) return [];
  let answer = [];
  let stack = [{
    node: root,
    children: root.children
  }];
  while (stack.length) {
    let myNode = stack.pop();
    if (myNode.children.length) {
      stack.push({
        node: myNode.node,
        children: []
      });
      for (let i = myNode.children.length - 1; i >= 0; i--) {
        stack.push({
          node: myNode.children[i],
          children: myNode.children[i].children
        });
      }
    } else {
      answer.push(myNode.node.val);
    }
  }
  return answer;
};
// @lc code=end

