// leetcode - 622. Design Circular Queue

// circular queue implementation - Dry Run
const MyCircularQueues = function (k) {
    const queueDs = new Queue(k);
};

class Queue {
    constructor(k) {
        this.queue = [];
        this.queueSize = k;
    }

    enQueue(e) {
        if (this.size() < this.queueSize) {
            this.queue.push(e);
            return true;
        }

        return false;
    }

    deQueue() {
        if (!this.isEmpty()) {
            this.queue.shift();
            return true;
        }

        return false;
    }

    front() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[0];
    }

    rear() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.size() - 1];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0 ? true : false;
    }

    isFull() {
        return this.size() < this.queueSize ? false : true;
    }
}

// circular queue implementation - leetcode version
const MyCircularQueue = function (k) {
    this.queue = [];
    this.queueSize = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.queue.length < this.queueSize) {
        this.queue.push(value);
        return true;
    }

    return false;
};

MyCircularQueue.prototype.deQueue = function () {
    if (this.queue.length !== 0) {
        this.queue.shift();
        return true;
    }

    return false;
};

MyCircularQueue.prototype.Front = function () {
    if (this.queue.length === 0) {
        return -1;
    }

    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
    if (this.queue.length === 0) {
        return -1;
    }

    return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0 ? true : false;
};

MyCircularQueue.prototype.isFull = function () {
    return this.queue.length < this.queueSize ? false : true;
};
