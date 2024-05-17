const maxDepth = function (root) {
    if (root === null || root === undefined) {
        return 0;
    }

    let leftMaxDepth = maxDepth(root.left);
    let rightMaxDepth = maxDepth(root.right);

    return Math.max(leftMaxDepth, rightMaxDepth) + 1; /* The +1 in the maxDepth function is added to account 
    for the current node itself when calculating the depth of the subtree rooted at that node. */
};

// const maxDepth = function(root) {
//     if(root === undefined || root === null){
//         return 0;
//     }

//     return Math.max(maxDepth(root.left), maxDepth(root.right) + 1);
// };
