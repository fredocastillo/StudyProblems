/*
Problem: Binary Tree Traversal
Difficulty: Easy
Description: Implement a function to perform an inorder traversal of a binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Traversal (Example)
 * File: BinaryTreeTraversal.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Preorder Traversal: Root -> Left -> Right
function preorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node) {
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

// Inorder Traversal: Left -> Root -> Right
function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

// Postorder Traversal: Left -> Right -> Root
function postorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }
  }

  traverse(root);
  return result;
}

// Helper function to construct a binary tree from an array
function arrayToBinaryTree(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, expectedPreorder, expectedInorder, expectedPostorder) {
    const resultPreorder = preorderTraversal(tree);
    const resultInorder = inorderTraversal(tree);
    const resultPostorder = postorderTraversal(tree);

    if (
      JSON.stringify(resultPreorder) === JSON.stringify(expectedPreorder) &&
      JSON.stringify(resultInorder) === JSON.stringify(expectedInorder) &&
      JSON.stringify(resultPostorder) === JSON.stringify(expectedPostorder)
    ) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree32_1 = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7]);
  const expectedPreorder32_1 = [1, 2, 4, 5, 3, 6, 7];
  const expectedInorder32_1 = [4, 2, 5, 1, 6, 3, 7];
  const expectedPostorder32_1 = [4, 5, 2, 6, 7, 3, 1];
  runTestCase(tree32_1, expectedPreorder32_1, expectedInorder32_1, expectedPostorder32_1);

  // Test case 2
  const tree32_2 = arrayToBinaryTree([1, null, 2, null, null, 3]);
  const expectedPreorder32_2 = [1, 2, 3];
  const expectedInorder32_2 = [1, 3, 2];
  const expectedPostorder32_2 = [3, 2, 1];
  runTestCase(tree32_2, expectedPreorder32_2, expectedInorder32_2, expectedPostorder32_2);

  // Test case 3
  const tree32_3 = null;
  const expectedPreorder32_3 = [];
  const expectedInorder32_3 = [];
  const expectedPostorder32_3 = [];
  runTestCase(tree32_3, expectedPreorder32_3, expectedInorder32_3, expectedPostorder32_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Traversal");
runTestCases();
