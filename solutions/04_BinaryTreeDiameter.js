/*
Problem: Binary Tree Diameter
Difficulty: Medium
Description: Find the diameter of a binary tree, which is the length of the longest path between any two nodes.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Diameter (Easy)
 * File: BinaryTreeDiameter.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (!node) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  depth(root);

  return diameter;
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
    const result = diameterOfBinaryTree(tree);

    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree29_1 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput29_1 = 3;
  runTestCase(tree29_1, expectedOutput29_1);

  // Test case 2
  const tree29_2 = arrayToBinaryTree([1, 2]);
  const expectedOutput29_2 = 1;
  runTestCase(tree29_2, expectedOutput29_2);

  // Test case 3
  const tree29_3 = null;
  const expectedOutput29_3 = 0;
  runTestCase(tree29_3, expectedOutput29_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Diameter");
runTestCases();
