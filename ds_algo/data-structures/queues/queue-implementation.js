class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(e) {
        return this.queue.push(e);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "cannot dequeue, queue is empty";
        }

        return this.queue.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "cannot look up, queue is empty";
        }

        return this.queue[0];
    }

    rear() {
        if (this.isEmpty()) {
            return "cannot look up, queue is empty";
        }

        return this.queue[this.queue.length - 1];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0 ? true : false;
    }
}
