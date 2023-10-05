/*
Problem: Binary Tree Maximum Sum Path
Difficulty: Hard
Description: Find the maximum path sum between any two nodes in a binary tree. The path may start and end at any node in the tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Maximum Sum Path (Hard)
 * File: BinaryTreeMaximumSumPath.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(root) {
  let maxSum = -Infinity;

  function getMaxPath(node) {
    if (!node) return 0;

    const leftMax = Math.max(0, getMaxPath(node.left));
    const rightMax = Math.max(0, getMaxPath(node.right));

    maxSum = Math.max(maxSum, leftMax + rightMax + node.val);

    return Math.max(leftMax, rightMax) + node.val;
  }

  getMaxPath(root);

  return maxSum;
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
    const result = maxPathSum(tree);
    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree15_1 = arrayToBinaryTree([1, 2, 3]);
  const expectedOutput15_1 = 6;
  runTestCase(tree15_1, expectedOutput15_1);

  // Test case 2
  const tree15_2 = arrayToBinaryTree([-10, 9, 20, null, null, 15, 7]);
  const expectedOutput15_2 = 42;
  runTestCase(tree15_2, expectedOutput15_2);

  // Test case 3
  const tree15_3 = arrayToBinaryTree([-10, -2, -3]);
  const expectedOutput15_3 = -2;
  runTestCase(tree15_3, expectedOutput15_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Maximum Sum Path");
runTestCases();
