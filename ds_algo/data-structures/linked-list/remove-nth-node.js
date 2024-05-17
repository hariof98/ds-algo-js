// leetcode - 19. Remove Nth Node From End of List
const removeNthFromEnd = function (head, n) {
    let first = head;
    let second = head;

    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    if (!first) {
        return head.next;
    }

    while (first.next) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return head;
};
