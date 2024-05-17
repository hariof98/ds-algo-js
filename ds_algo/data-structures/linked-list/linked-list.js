// arrays can only store data in linear fashion
// but linked list cannot store data linearly, hence it offers flexibility and more memory space whhen compared with arrays
console.clear();

class CreateNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CreateLists {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNodeAtFirst(data) {
        const node = new CreateNode(data);
        node.next = null;
        this.head = node;

        return node;
    }

    addNodeAtLast(data) {
        const node = new CreateNode(data);
        node.next = null;
        this.tail = node;

        if (!this.head) {
            this.head = node;
        } else {
            let getLastNullNode = this.head;

            while (getLastNullNode.next) {
                getLastNullNode = getLastNullNode.next;
            }

            getLastNullNode.next = node;
        }

        return node;
    }

    addNodeAtIndex(data, index) {
        if (index < 0 || index === undefined) {
            console.error("Invalid Index (or) Index not found");
            return;
        }

        const node = new CreateNode(data);

        if (this.isEmpty() || index === 0) {
            node.next = null;
            this.head = node;
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

    removeNodeAtFirst() {
        if (this.isEmpty()) {
            console.error("linked list is already empty");
            return;
        }

        this.head = this.head.next;
    }

    removeNodeAtLast() {
        if (this.isEmpty()) {
            console.error("linked list is already empty");
            return;
        }

        let current = this.head;

        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    removeNodeAtIndex(index) {
        if (this.isEmpty()) {
            console.error("linked list is already empty");
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current?.next) {
            count++;
            current = current.next;
        }

        return count;
    }

    isEmpty() {
        return this.size() > 0 ? false : true;
    }

    print() {
        let current = this.head;

        while (!current.next) {
            console.log(current);
        }
    }
}

const linkedList = new CreateLists();

linkedList.addNodeAtFirst(10);
linkedList.addNodeAtLast(20);
linkedList.addNodeAtLast(30);
linkedList.addNodeAtLast(40);
linkedList.addNodeAtIndex(15, 1);
linkedList.removeNodeAtIndex(1);
linkedList.removeNodeAtFirst();
linkedList.removeNodeAtLast();
linkedList.size();
linkedList.print();

console.log(linkedList);
