/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.96%)
 * Total Accepted:    77.2K
 * Total Submissions: 241.4K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /*
 * 解法: 迭代法 
 * 思路：每次加一位，记录进位，作为加数下次想加。
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  let answerArray = [];
  let carry = 0;
  while (l1 || l2 || carry) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (val >= 10) {
      val = val % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null;
    answerArray.push(val);
  }
  let answer = new ListNode(0);
  let answer_n = answer.next = new ListNode(0);
  for (let i = 0; i < answerArray.length; i++) {
    answer_n.val = answerArray[i];
    if (i != answerArray.length - 1) {
      answer_n.next = new ListNode(0);
      answer_n = answer_n.next;
    }
  }
  return answer.next;
};
