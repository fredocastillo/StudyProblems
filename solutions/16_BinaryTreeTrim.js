/*
Problem: Binary Tree Trim
Difficulty: Easy
Description: Given a binary search tree and two values, trim the tree so that all elements are between those two values.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Trim (Medium)
 * File: BinaryTreeTrim.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function trimBST(root, low, high) {
  if (!root) return null;

  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
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

// Helper function to convert a binary tree to an array for testing purposes
function binaryTreeToArray(root) {
  const result = [];

  function preorder(node) {
    if (!node) return;

    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return result;
}

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, low, high, expectedOutput) {
    const resultTree = trimBST(tree, low, high);
    const resultArray = binaryTreeToArray(resultTree);
    
    if (JSON.stringify(resultArray) === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree17_1 = arrayToBinaryTree([1, 0, 2]);
  const low1 = 1;
  const high1 = 2;
  const expectedOutput17_1 = [1, null, 2];
  runTestCase(tree17_1, low1, high1, expectedOutput17_1);

  // Test case 2
  const tree17_2 = arrayToBinaryTree([3, 0, 4, null, 2, null, null, 1]);
  const low2 = 1;
  const high2 = 3;
  const expectedOutput17_2 = [3, 2, null, 1];
  runTestCase(tree17_2, low2, high2, expectedOutput17_2);

  // Test case 3
  const tree17_3 = arrayToBinaryTree([3, 1, 4, null, 2]);
  const low3 = 3;
  const high3 = 4;
  const expectedOutput17_3 = [3, null, 4, null, 2];
  runTestCase(tree17_3, low3, high3, expectedOutput17_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Trim");
runTestCases();
