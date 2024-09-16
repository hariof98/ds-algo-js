class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class CreateBinaryTree {
    constructor() {
        this.root = null;
    }

    addNewNode(data) {
        const node = new BinaryTree(data);

        if (!this.root) {
            this.root = node;

            return;
        } else {
            this.insertNewNode(this.root, node);
        }
    }

    insertNewNode(rootNode, newNode) {
        // root will be available

        if (newNode.data < rootNode.data) {
            // assign to left
            if (!rootNode.left) {
                rootNode.left = newNode;
            } else {
                this.insertNewNode(rootNode.left, newNode);
            }
        } else {
            // assign to right
            if (!rootNode.right) {
                rootNode.right = newNode;
            } else {
                this.insertNewNode(rootNode.right, newNode);
            }
        }
    }

    // inorder
    inorder(rootNode = this.root) {
        if (rootNode !== null) {
            this.inorder(rootNode.left);
            console.log(rootNode.data);
            this.inorder(rootNode.right);
        }
    }

    // preorder
    preorder(rootNode = this.root) {
        if (rootNode !== null) {
            console.log(rootNode.data);
            this.preorder(rootNode.left);
            this.preorder(rootNode.right);
        }
    }

    // postorder
    postorder(rootNode = this.root) {
        if (rootNode !== null) {
            this.postorder(rootNode.left);
            this.postorder(rootNode.right);
            console.log(rootNode.data);
        }
    }
}

let bt = new CreateBinaryTree();

bt.addNewNode(10);
bt.addNewNode(20);
bt.addNewNode(50);
bt.addNewNode(30);
bt.addNewNode(40);

console.log(bt);

console.log("----------");
bt.inorder();

console.log("----------");
bt.preorder();

console.log("----------");
bt.postorder();
