const sortList = (head) => {
    let arr = [];

    let current = head;

    while (current) {
        arr.push(current.data);

        current = current.next;
    }

    // optimized
    arr.sort((a, b) => {
        return a - b;
    });

    current = head;

    for (let i = 0; i < arr.length; i++) {
        current.val = arr[i];

        current = current.next;
    }

    return head;
};

// const sortLists = (head) => {
//     let arr = [];

//     let current = head;

//     while (current) {
//         arr.push(current.data);

//         current = current.next;
//     }

//     // not optimized
//     const sort = (array) => {
//         if (array.length <= 1) {
//             return array;
//         }

//         let left = [];
//         let right = [];
//         let pivot = array[0];

//         for (let i = 1; i < array.length; i++) {
//             if (array[i] <= pivot) {
//                 left.push(array[i]);
//             } else {
//                 right.push(array[i]);
//             }
//         }

//         return [...sort(left), pivot, ...sort(right)];
//     };

//     let res = sort(arr);

//     let ll = new SortList();

//     for (let i = 0; i < res.length; i++) {
//         ll.addData(res[i]);
//     }

//     console.log(ll.head);
//     return ll.head;
// };

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SortList {
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

    addNodeAtIndex(data, index) {
        const node = new LinkedList(data);

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

    getAllNodes() {
        let result = [];

        let current = this.head;

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result);
    }
}

let ll = new SortList();

ll.addData(4);
ll.addData(2);
ll.addData(1);
ll.addData(3);

sortList(ll.head);
