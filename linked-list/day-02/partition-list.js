// 86. Partition List

const partition = (head, x) => {
    const left = [];
    const right = [];

    const pivot = x;

    let current = head;

    while (current) {
        if (current.data < pivot) {
            left.push(current.data);
        } else {
            right.push(current.data);
        }

        current = current.next;
    }

    let ll = new PartitionList();

    const result = [...left, ...right];
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        ll.addData(result[i]);
    }

    console.log(ll.head);
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class PartitionList {
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

const ll = new PartitionList();

ll.addData(1);
ll.addData(4);
ll.addData(3);
ll.addData(2);
ll.addData(5);
ll.addData(2);

partition(ll.head, 3);
