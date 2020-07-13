/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
	let lists = [];
	while (head) {
		lists.push(head);
		head = head.next;
	}
	return lists[parseInt(lists.length / 2)];
};

/**
 * @way 快慢指针
 * @from 
 * @description 快指针走完了慢指针正好到一半
 * @result 
 * @O 
 * @time 2020-07-13 09:49:26
 */
var middleNode = function(head) {
	if (!head.next) return head;
	let sPoint = head;
	let fPoint = head.next;
	while (fPoint) {
		sPoint = sPoint.next;
		if (fPoint.next) {
			fPoint = fPoint.next.next;
		} else {
			return sPoint;
		}
	}
	return sPoint;
};
// @lc code=end
