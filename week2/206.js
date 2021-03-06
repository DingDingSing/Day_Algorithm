// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// https://leetcode-cn.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

// 迭代
var reverseList = function (head) {
  let pre = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};
