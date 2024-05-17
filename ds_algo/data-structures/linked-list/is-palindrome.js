console.clear();

const isPalindrome = function (val) {
    let current = val.head;

    let string1 = "";
    let string2 = "";

    while (current) {
        string1 = string1 + current.data;
        string2 = current.data + string2;
        current = current.next;
    }

    console.log(string1);
    console.log(string2);

    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
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

ll.addToTop(1);
ll.addToBottom(2);

isPalindrome(ll);
