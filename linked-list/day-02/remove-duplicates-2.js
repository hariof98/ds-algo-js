// 82. Remove Duplicates from Sorted List II

const deleteDuplicates = (head) => {
    let current = head;

    let obj = new Map();

    while (current) {
        if (obj.has(current.data)) {
            obj.set(current.data, obj.get(current.data) + 1);
        } else {
            obj.set(current.data, 1);
        }

        //obj[current.data] = obj[current.data] ? obj[current.data] + 1 : 1;

        current = current.next;
    }

    let arr = [...obj.keys()];

    let ll = new RemoveDuplicates();

    for (let i = 0; i < arr.length; i++) {
        if (obj.get(arr[i]) === 1) {
            ll.addData(arr[i]);
        }
    }

    console.log(ll.head);
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class RemoveDuplicates {
    constructor() {
        this.head = null;
    }

    addData(data) {
        const node = new LinkedList(data);

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

const ll = new RemoveDuplicates();

ll.addData(80);
ll.addData(10);
ll.addData(20);
ll.addData(20);
ll.addData(30);
ll.addData(40);
ll.addData(50);

deleteDuplicates(ll.head);
