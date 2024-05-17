/*
Consider the following BST:

    3
   / \
  1   4
   \
    2

For this tree:

    If k = 1, the result should be 1 (the smallest value).
    If k = 2, the result should be 2 (the second smallest value).
    If k = 3, the result should be 3 (the third smallest value).
    If k = 4, the result should be 4 (the fourth smallest value).
*/

const kthSmallest = function (root, k) {
    if (root === null) {
        return;
    }

    const result = {
        value: null,
        count: 0,
    };

    const findKSmallest = (node) => {
        if (node === null || result.value !== null) {
            return;
        }

        findKSmallest(node.left);

        result.count++;

        if (result.count === k) {
            result.value = node.val;
            return;
        }

        findKSmallest(node.right);
    };

    findKSmallest(root);

    return result.value;
};

/*
User
since in BT, the smallest is going to be on left, then why we are searching on right recursively?
findKSmallest(node.right);

ChatGPT

Your observation about the nature of binary trees (BT) and the search direction in the findKSmallest function is correct. Typically, when searching for the kth smallest element in a binary search tree (BST), the smallest values are indeed found on the leftmost side due to the properties of BSTs where values to the left are smaller and values to the right are larger.

Let's address why we still recursively search the right subtree (findKSmallest(node.right)) in the findKSmallest function, even though the smallest values are expected to be on the left:

    In-order Traversal: The findKSmallest function is designed to perform an in-order traversal of the BST. In in-order traversal:
        We first visit the left subtree (findKSmallest(node.left)).
        Then, we process the current node (result.count++ and check if result.count === k).
        Finally, we visit the right subtree (findKSmallest(node.right)).

    Purpose of Recursive Search:

        Left Subtree: By recursively searching the left subtree first (findKSmallest(node.left)), we ensure that we explore the smallest values first. This traversal approach guarantees that we encounter nodes in increasing order of their values.

        Current Node: After exploring the left subtree and before exploring the right subtree, we increment the result.count to keep track of the number of nodes visited (which corresponds to the order of values in an in-order traversal).

        Right Subtree: The recursive call to findKSmallest(node.right) is executed after processing the current node and the left subtree. This step allows us to continue exploring larger values (relative to the current node) as we move towards the right side of the BST.

    Stopping Condition:
        The result.count is checked against k after processing each node. When result.count === k, it means we have found the kth smallest element, and we update result.value with the value of the current node (node.val).
        Once the kth smallest element is found (result.value is updated), subsequent recursive calls are terminated early using the base case (return; when result.value !== null). This optimization prevents unnecessary exploration of the rest of the BST.

In summary, even though the smallest values are typically found on the leftmost side of a BST, the recursive exploration of both left and right subtrees in the findKSmallest function follows the standard in-order traversal pattern. This traversal order ensures that we correctly identify and count the kth smallest element by visiting nodes in ascending order of their values. The recursive search of the right subtree (findKSmallest(node.right)) is essential for fully exploring the BST and adhering to the in-order traversal approach.
*/
