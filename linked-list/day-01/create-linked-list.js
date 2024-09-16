class LikedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CreateLinkedList {
    constructor() {
        this.head = null;
    }

    addNewNode(data) {
        const node = new LikedList(data);

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

    addNodeAtIndex(data, index) {
        const node = new LikedList(data);

        if (!this.head) {
            this.head = node;

            return;
        }

        let current = this.head;

        let count = 0;

        while (count < index - 1) {
            count++;
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
    }

    getAllData() {
        let current = this.head;

        let result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result);
    }
}

let ll = new CreateLinkedList();

ll.addNewNode(10);
ll.addNewNode(20);
ll.addNewNode(30);
ll.addNewNode(40);
ll.addNewNode(50);

ll.addNodeAtIndex(25, 2);
ll.addNodeAtIndex(45, 5);

console.log(ll);

ll.getAllData();
