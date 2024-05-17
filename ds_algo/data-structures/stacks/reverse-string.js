// leetcode - 151. Reverse Words in a String

// const reverseWords = function(s) {
//     const arr = s.split(' ').toReversed().filter(Boolean).join(' ');
//     return arr;
// };

// with stack approach
const reverseWords = function (s) {
    const arr = s.split(" ");

    const callStack = new Stack();

    for (let i = 0; i <= arr.length - 1; i++) {
        callStack.push(arr[i]);
    }

    //console.log(callStack.stack);

    let string = "";

    while (callStack.stack.length !== 0) {
        string = string.trim() + " " + callStack.pop();
    }

    return string.trim();
};

class Stack {
    constructor() {
        this.stack = [];
    }

    push(elements) {
        return this.stack.push(elements);
    }

    peek() {
        if (this.isEmpty()) {
            return "stack is empty";
        }

        return this.stack[this.stack.length - 1];
    }

    pop() {
        if (this.isEmpty()) {
            return "stack is empty";
        }

        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0 ? true : false;
    }
}

console.log(reverseWords("a good   example"));
