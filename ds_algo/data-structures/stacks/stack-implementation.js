class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        return this.stack.push(element);
    }

    pop() {
        if (this.size() === 0) {
            return "Stack is empty. Cannot perform pop operation";
        }

        return this.stack.pop();
    }

    peek() {
        if (this.size() === 0) {
            return "Stack is empty. Cannot perform peek operation";
        }

        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0 ? true : false;
    }
}

const stacks = new Stack();

stacks.push(10);
stacks.push(100);
console.log(stacks.peek());
stacks.pop();
