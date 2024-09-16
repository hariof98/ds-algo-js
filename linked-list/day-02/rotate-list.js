// 61. Rotate List

const rotateList = (val, k) => {
    if (k > val.length) {
        k = k % val.length;
    }

    for (let i = 0; i < k; i++) {
        const pop = val.pop();

        val.unshift(pop);
    }

    const ll = new RotateList();

    for (let j = 0; j < val.length; j++) {
        ll.addData(val[j]);
    }

    console.log(ll.head);
};

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class RotateList {
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

    getAllData() {
        let current = this.head;

        let result = [];

        while (current) {
            //console.log(current.data);
            result.push(current.data);
            current = current.next;
        }

        return result;
    }
}

const ll = new RotateList();

ll.addData(1);
ll.addData(2);
ll.addData(3);
ll.addData(4);
ll.addData(5);

const allData = ll.getAllData();

const rotation = 2;

rotateList(allData, rotation);
