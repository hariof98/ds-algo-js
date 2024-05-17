class BT {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addNewNode(data) {
        const node = new BT(data);

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(oldNode, newNode) {
        if (newNode.data < oldNode.data) {
            if (oldNode.left === null) {
                oldNode.left = newNode;
            } else {
                this.insertNode(oldNode.left, newNode);
            }
        } else {
            if (oldNode.right === null) {
                oldNode.right = newNode;
            } else {
                this.insertNode(oldNode.right, newNode);
            }
        }
    }

    inorder(oldNode = this.root) {
        if (oldNode !== null) {
            this.inorder(oldNode.left); // recursively visit left subtree
            console.log(oldNode.data); // visit current node
            this.inorder(oldNode.right); // recursively visit right subtree
        }
    }

    preOrder(oldNode = this.root) {
        if (oldNode !== null) {
            console.log(oldNode.data); // visit current node
            this.preOrder(oldNode.left); // recursively visit left subtree
            this.preOrder(oldNode.right); // recursively visit right subtree
        }
    }

    postOrder(oldNode = this.root) {
        if (oldNode !== null) {
            this.postOrder(oldNode.left); // recursively visit left subtree
            this.postOrder(oldNode.right); // recursively visit right subtree
            console.log(oldNode.data); // visit current node
        }
    }
}

const binaryTree = new Tree();
binaryTree.addNewNode(10);
binaryTree.addNewNode(5);
binaryTree.addNewNode(15);
binaryTree.addNewNode(7);
binaryTree.addNewNode(12);

console.log(binaryTree);
binaryTree.inorder();
console.log("----");
binaryTree.preOrder();
console.log("----");
binaryTree.postOrder();
