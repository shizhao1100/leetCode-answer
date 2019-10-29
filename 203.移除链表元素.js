/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let firstNode = head;
  if (!head) {
    return null;
  }
  while (head.next) {
    if (head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next;
    }
  }
  if (firstNode.val === val) {
    return firstNode.next;
  } else {
    return firstNode;
  }
};

