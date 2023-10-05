/*
Problem: Binary Tree Level Order Traversal
Difficulty: Medium
Description: Create a function to perform a level order traversal of a binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Level Order Traversal (Medium)
 * File: BinaryTreeLevelOrderTraversal.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

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

  function runTestCase(tree, expectedOutput) {
    const result = levelOrder(tree);

    if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree30_1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput30_1 = [[3], [9, 20], [15, 7]];
  runTestCase(tree30_1, expectedOutput30_1);

  // Test case 2
  const tree30_2 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput30_2 = [[1], [2, 3], [4, 5]];
  runTestCase(tree30_2, expectedOutput30_2);

  // Test case 3
  const tree30_3 = null;
  const expectedOutput30_3 = [];
  runTestCase(tree30_3, expectedOutput30_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Level Order Traversal");
runTestCases();
