// leetcode -  Add Two Numbers
const addTwoNumbers = function (l1, l2) {
    if (!l1) {
        return l1.head.data;
    }

    if (!l2) {
        return l2.head.data;
    }

    let currentOne = l1.head;
    let currentTwo = l2.head;

    let s1 = "";
    let s2 = "";

    while (currentOne) {
        s1 = currentOne.data + s1;
        currentOne = currentOne.next;
    }

    while (currentTwo) {
        s2 = currentTwo.data + s2;
        currentTwo = currentTwo.next;
    }

    let result = (BigInt(s1) + BigInt(s2)).toString().split("").reverse();

    let ll3 = new Palindrome();

    for (let i = 0; i <= result.length - 1; i++) {
        let parser = parseInt(result[i]);

        if (i === 0) {
            ll3.addToTop(parser);
        } else {
            ll3.addToBottom(parser);
        }
    }

    console.log(ll3);
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

const ll1 = new Palindrome();
const ll2 = new Palindrome();

ll1.addToTop(2);
ll1.addToBottom(4);
ll1.addToBottom(3);

ll2.addToTop(5);
ll2.addToBottom(6);
ll2.addToBottom(4);

// console.log(ll1);
// console.log(ll2);

addTwoNumbers(ll1, ll2);
