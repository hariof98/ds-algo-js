// 104. Maximum Depth of Binary Tree

const maxDepth = function (root) {
    if (root) {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        /* The +1 in the maxDepth function is added to account for the 
        current node itself when calculating the depth of the subtree rooted at that node. */
    } else {
        return 0;
    }
};
