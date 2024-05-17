// leetcode - 328. Odd Even Linked List

console.clear();

// my implementation - not optimized
const oddEvenList = (ll) => {
    let current = ll.head;
    let count = 1;

    while (current) {
        count++;
        current = current.next;
    }

    let oddLinkedList = [];
    let evenLinkedList = [];

    let currentNext = ll.head;

    for (let i = 1; i <= count - 1; i++) {
        if (i % 2 === 0) {
            evenLinkedList.push(currentNext.data);
        } else {
            oddLinkedList.push(currentNext.data);
        }

        currentNext = currentNext.next;
    }

    let combinedLinkedList = [...oddLinkedList, ...evenLinkedList];

    const node = new Create();

    for (let j = 0; j <= combinedLinkedList.length - 1; j++) {
        if (j === 0) {
            node.addToFirst(combinedLinkedList[j]);
        } else {
            node.addToLast(combinedLinkedList[j]);
        }
    }

    console.log(node);

    // Linked List Length Even or Odd?
    let counter = 0;

    while (node.head) {
        counter++;

        node.head = node.head.next;
    }

    if (counter % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Create {
    constructor() {
        this.head = null;
    }

    addToFirst(data) {
        const node = new LinkedList(data);
        this.head = node;
        return node;
    }

    addToLast(data) {
        const node = new LinkedList(data);
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
llt.addToLast(2);
llt.addToLast(3);
llt.addToLast(4);
llt.addToLast(5);

oddEvenList(llt);
