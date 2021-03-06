// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let pre = 0;
  let head = new ListNode();
  let tail = head;

  while (pre || l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + pre;

    if (sum >= 10) {
      tail.next = new ListNode(sum % 10);
      pre = 1;
    } else {
      tail.next = new ListNode(sum);
      pre = 0;
    }
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
    tail = tail.next;
  }
  return head.next;
};
