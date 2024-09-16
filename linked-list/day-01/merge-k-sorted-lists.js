// 23. Merge k Sorted Lists

const mergeKLists = (lists) => {
    let merged = []; // string is not used because we also have to handle negtive values
    let current;

    for (let i = 0; i < lists.length; i++) {
        current = lists[i];

        while (current) {
            merged.push(current.data);
            current = current.next;
        }
    }

    merged.sort((a, b) => {
        return a - b;
    });

    const ll = new MergeKSorted();

    for (let i = 0; i < merged.length; i++) {
        ll.addData(merged[i]);
    }

    console.log(ll.head);
    return ll.head;
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MergeKSorted {
    constructor() {
        this.head = null;
    }

    addData(data) {
        let node = new LinkedList(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }
}

// [1,4,5],[1,3,4],[2,6]
const l1 = new MergeKSorted();
const l2 = new MergeKSorted();
const l3 = new MergeKSorted();

l1.addData(1);
l1.addData(4);
l1.addData(5);

l2.addData(1);
l2.addData(3);
l2.addData(4);

l3.addData(2);
l3.addData(6);

const formList = [l1, l2, l3];

mergeKLists(formList);
