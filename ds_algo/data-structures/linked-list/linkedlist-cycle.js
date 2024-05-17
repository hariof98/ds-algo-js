const hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }

    let fast = head.next;
    let slow = head;

    while (fast && fast.next) {
        if (fast === slow) {
            return true;
        }

        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
};
