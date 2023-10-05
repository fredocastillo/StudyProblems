/*
Problem: Binary Tree Maximum Depth
Difficulty: Easy
Description: Write a function to find the maximum depth (height) of a binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Maximum Depth (Easy)
 * File: BinaryTreeMaximumDepth.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
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
    const result = maxDepth(tree);

    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree31_1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput31_1 = 3;
  runTestCase(tree31_1, expectedOutput31_1);

  // Test case 2
  const tree31_2 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput31_2 = 3;
  runTestCase(tree31_2, expectedOutput31_2);

  // Test case 3
  const tree31_3 = null;
  const expectedOutput31_3 = 0;
  runTestCase(tree31_3, expectedOutput31_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Maximum Depth");
runTestCases();
