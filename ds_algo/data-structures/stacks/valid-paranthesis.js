const isValid = function (s) {
    const arr = s.split("");

    if (arr.length <= 1) {
        return false;
    }

    const callStack = new Stack();

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            callStack.push(arr[i]);
        } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
            if (i === 0) {
                return false;
            }

            const lookUp = callStack.peek();

            if ((lookUp === "(" && arr[i] === ")") || (lookUp === "{" && arr[i] === "}") || (lookUp === "[" && arr[i] === "]")) {
                callStack.pop();
            } else {
                callStack.push(arr[i]);
            }
        }
    }

    if (callStack.isEmpty()) {
        return true;
    } else {
        return false;
    }
};

class Stack {
    constructor() {
        this.stack = [];
    }

    push(e) {
        return this.stack.push(e);
    }

    pop() {
        if (this.isEmpty()) {
            return false;
        }

        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return false;
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

console.log(isValid("(])"));
