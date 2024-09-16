// 2. Add Two Numbers

const addTwoNumbers = (l1, l2) => {
    let current1 = l1.head;
    let s1 = "";

    let current2 = l2.head;
    let s2 = "";

    while (current1) {
        s1 = current1.data + s1;
        current1 = current1.next;
    }

    while (current2) {
        s2 = current2.data + s2;
        current2 = current2.next;
    }

    let add = (parseInt(s1) + parseInt(s2)).toString();

    const ll = new TwoNumbers();

    for (let i = add.length - 1; i >= 0; i--) {
        ll.addData(parseInt(add[i]));
    }

    console.log(ll.head);
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class TwoNumbers {
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

const l1 = new TwoNumbers();
const l2 = new TwoNumbers();

l1.addData(2);
l1.addData(4);
l1.addData(3);

l2.addData(5);
l2.addData(6);
l2.addData(4);

addTwoNumbers(l1, l2);
