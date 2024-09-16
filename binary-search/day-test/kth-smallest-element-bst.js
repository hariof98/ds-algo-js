// 230. Kth Smallest Element in a BST

const kthSmallest = function (root, k) {
    if (!root) {
        return 0;
    }

    let count = 0;
    let result;

    const findSmallestElement = (node) => {
        if (!node) {
            return;
        }

        findSmallestElement(node.left);

        count++;

        if (count === k) {
            result = node.val;
            return result;
        }

        findSmallestElement(node.right);
    };

    findSmallestElement(root);

    return result;
};
