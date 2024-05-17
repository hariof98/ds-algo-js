class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CreateLinkedList {
    constructor() {
        this.head = null;
    }

    addFirstNode(data) {
        const node = new LinkedList(data);
        node.next = null;
        this.head = node;

        return node;
    }

    addLastNode(data) {
        const node = new LinkedList(data);
        node.next = null;

        if (!this.head) {
            this.head = node;
            return;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        return node;
    }

    addNodeAtIndex(data, index) {
        const node = new LinkedList(data);

        if (!this.head) {
            this.head = node;
            node.next = null;
            return;
        } else {
            let current = this.head;

            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            node.next = current.next;
            current.next = node;
        }

        return node;
    }

    removeFromTop() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    removeFromBottom() {
        if (this.head) {
            let current = this.head;

            while (current.next === null) {
                current = current.next;
            }

            current.next = null;
        }
    }

    removeAtIndex(index) {
        if (this.head) {
            let current = this.head;

            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            current.next = current.next.next;
        }
    }
}

const ll = new CreateLinkedList();

ll.addFirstNode(1);
ll.addLastNode(3);
ll.addNodeAtIndex(2, 1);
ll.removeFromTop();
ll.removeFromBottom();

console.log(ll);
