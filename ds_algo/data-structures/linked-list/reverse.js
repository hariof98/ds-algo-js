console.clear();

// leetcode - 206. Reverse Linked List
// var reverseList = function (head) {
//     let current = head;
//     let prev = null;
//     let newNode;

//     while (current) {
//         newNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = newNode;
//     }

//     return prev;
// };

// class LinkedList {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Palindrome {
//     constructor() {
//         this.head = null;
//     }

//     addToTop(data) {
//         const node = new LinkedList(data);
//         node.next = null;
//         this.head = node;

//         return node;
//     }

//     addToBottom(data) {
//         const node = new LinkedList(data);
//         node.next = null;

//         if (!this.head) {
//             this.head = node;
//         } else {
//             let current = this.head;

//             while (current.next) {
//                 current = current.next;
//             }

//             current.next = node;
//         }

//         return node;
//     }
// }

// const ll = new Palindrome();

// ll.addToTop(1);
// ll.addToBottom(2);
// ll.addToBottom(3);
// ll.addToBottom(4);
// ll.addToBottom(5);

// reverseList(ll);

const reverseList = (head) => {
    let arr = [];

    let current = head;

    while (current) {
        arr.unshift(current.val);
        current = current.next;
    }

    const reversedLinkedList = new ll();

    for (let i = 0; i <= arr.length - 1; i++) {
        if (i === 0) {
            reversedLinkedList.addToTop(arr[i]);
        } else {
            reversedLinkedList.addToBottom(arr[i]);
        }
    }

    return reversedLinkedList.head;
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
            this.next = null;
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
ll1.addToBottom(3);
ll1.addToBottom(4);
ll1.addToBottom(5);

reverseList(ll1.head);
