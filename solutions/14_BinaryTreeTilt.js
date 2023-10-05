/*
Problem: Binary Tree Tilt
Difficulty: Easy
Description: Calculate the tilt of a binary tree. The tilt of a binary tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Tilt (Easy)
 * File: BinaryTreeTilt.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findTilt(root) {
  let tiltSum = 0;

  function calculateSum(node) {
    if (!node) return 0;

    const leftSum = calculateSum(node.left);
    const rightSum = calculateSum(node.right);

    const tilt = Math.abs(leftSum - rightSum);
    tiltSum += tilt;

    return leftSum + rightSum + node.val;
  }

  calculateSum(root);

  return tiltSum;
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
    const result = findTilt(tree);
    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree19_1 = arrayToBinaryTree([1, 2, 3]);
  const expectedOutput19_1 = 1;
  runTestCase(tree19_1, expectedOutput19_1);

  // Test case 2
  const tree19_2 = arrayToBinaryTree([4, 2, 9, 3, 5, null, 7]);
  const expectedOutput19_2 = 15;
  runTestCase(tree19_2, expectedOutput19_2);

  // Test case 3
  const tree19_3 = null;
  const expectedOutput19_3 = 0;
  runTestCase(tree19_3, expectedOutput19_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Tilt");
runTestCases();
