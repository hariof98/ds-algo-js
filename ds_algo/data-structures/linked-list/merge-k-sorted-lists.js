const mergeKLists = (one, two, three) => {
    const oneList = one.head;
    const twoList = two.head;
    const threeList = three.head;

    const arr = [];

    while (oneList) {
        arr.push(oneList.val);
        oneList = oneList.next;
    }

    while (twoList) {
        arr.push(twoList.val);
        twoList = twoList.next;
    }

    while (threeList) {
        arr.push(threeList.val);
        threeList = threeList.next;
    }

    arr.sort((a, b) => {
        return a - b;
    });

    const mergedLl = new Create();

    for (let i = 0; i <= arr.length; i++) {
        if (i === 0) {
            mergedLl.addToFirst(arr[i]);
        } else {
            mergedLl.addToLast(arr[i]);
        }
    }

    return mergedLl.head;
};

class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Create {
    constructor() {
        this.head = null;
    }

    addToFirst(val) {
        const node = new LinkedList(val);
        this.head = node;
        return node;
    }

    addToLast(val) {
        const node = new LinkedList(val);
        node.next = null;

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

const llt = new Create();
llt.addToFirst(1);
llt.addToLast(4);
llt.addToLast(5);

const llt2 = new Create();
llt2.addToFirst(1);
llt2.addToLast(3);
llt2.addToLast(4);

const llt3 = new Create();
llt2.addToFirst(2);
llt2.addToLast(6);

mergeKLists(llt, llt2, llt3);
