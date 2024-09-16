// 104. Maximum Depth of Binary Tree

const maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    const left = maxDepth(root.left) + 1;
    const right = maxDepth(root.right) + 1;

    return Math.max(left, right);
};
