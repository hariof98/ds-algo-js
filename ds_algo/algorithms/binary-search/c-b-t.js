class CreatBinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class InitBinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new CreatBinaryTree(data);

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(existingNode, newNode) {
        // if new node is less than old one
        if (newNode.data < existingNode.data) {
            // insert node to left
            if (existingNode.left === null) {
                existingNode.left = newNode;
            } else {
                this.insertNode(existingNode.left, newNode);
            }
        } else {
            if (existingNode.right === null) {
                existingNode.right = newNode;
            } else {
                this.insertNode(existingNode.right, newNode);
            }
        }
    }

    // left, root, right
    inOrder(existingNode = this.root) {
        if (existingNode !== null) {
            this.inOrder(existingNode.left);
            console.log(existingNode.data);
            this.inOrder(existingNode.right);
        }
    }

    // root, left, right
    preOrder(existingNode = this.root) {
        if (existingNode !== null) {
            console.log(existingNode.data);
            this.preOrder(existingNode.left);
            this.preOrder(existingNode.right);
        }
    }

    postOrder(existingNode = this.root) {
        if (existingNode !== null) {
            this.postOrder(existingNode.left);
            this.postOrder(existingNode.right);
            console.log(existingNode.data);
        }
    }
}

const n = new InitBinaryTree();
n.insert(10);
n.insert(20);
n.insert(30);

console.log("inorder");
n.inOrder();

console.log("preorder");
n.preOrder();

console.log("postorder");
n.postOrder();

console.log(n);
