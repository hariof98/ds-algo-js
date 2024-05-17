// leetcode - 21. Merge Two Sorted Lists
console.clear();

const mergeSortedList = (merge1, merge2) => {
    let lList1 = merge1.head;
    let lList2 = merge2.head;

    let arr = [];

    while (lList1) {
        arr.push(lList1.val);
        lList1 = lList1.next;
    }

    while (lList2) {
        arr.push(lList2.val);
        lList2 = lList2.next;
    }

    arr.sort((a, b) => {
        return a - b;
    });

    let newMergeSortedList = new ll();

    for (let i = 0; i <= arr.length - 1; i++) {
        if (i === 0) {
            newMergeSortedList.addToTop(arr[i]);
        } else {
            newMergeSortedList.addToBottom(arr[i]);
        }
    }

    console.log(newMergeSortedList.head);

    let newCurrent = newMergeSortedList.head;

    while (newCurrent) {
        console.log(newCurrent.val);
        newCurrent = newCurrent.next;
    }
};

class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class ll {
    constructor() {
        this.head = null;
    }

    addToTop(val) {
        const node = new LinkedList(val);
        this.head = node;

        return node;
    }

    addToBottom(val) {
        const node = new LinkedList(val);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;

        return node;
    }
}

const ll1 = new ll();
ll1.addToTop(1);
ll1.addToBottom(2);
ll1.addToBottom(4);

const ll2 = new ll();
ll2.addToTop(1);
ll2.addToBottom(3);
ll2.addToBottom(4);

mergeSortedList(ll1, ll2);
