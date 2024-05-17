console.clear();

// leetcode - 237. Delete Node in a Linked List
const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

const deleteNodes = function (node) {
    let current = node.head;
    let k = 5;

    while (current.data === k) {
        current = current.next;
    }

    current.next = current.next.next;
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Palindrome {
    constructor() {
        this.head = null;
    }

    addToTop(data) {
        const node = new LinkedList(data);
        node.next = null;
        this.head = node;

        return node;
    }

    addToBottom(data) {
        const node = new LinkedList(data);
        node.next = null;

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        return node;
    }
}

const ll = new Palindrome();

ll.addToTop(4);
ll.addToBottom(5);
ll.addToBottom(1);
ll.addToBottom(9);

// [4,5,1,9]
console.log(ll);
deleteNodes(ll);
console.log(ll);
