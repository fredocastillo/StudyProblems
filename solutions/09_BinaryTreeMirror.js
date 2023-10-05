/*
Problem: Binary Tree Mirror
Difficulty: Easy
Description: Convert a binary tree to its mirror image by swapping the left and right subtrees.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Mirror (Easy)
 * File: BinaryTreeMirror.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root) {
  if (!root) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

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

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, expectedOutput) {
    const mirroredTree = invertTree(tree);
    const result = JSON.stringify(mirroredTree);

    if (result === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree24_1 = arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]);
  const expectedOutput24_1 = {
    val: 4,
    left: {
      val: 7,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  };
  runTestCase(tree24_1, expectedOutput24_1);

  // Test case 2
  const tree24_2 = arrayToBinaryTree([1, 2, 3]);
  const expectedOutput24_2 = {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  };
  runTestCase(tree24_2, expectedOutput24_2);

  // Test case 3
  const tree24_3 = null;
  const expectedOutput24_3 = null;
  runTestCase(tree24_3, expectedOutput24_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Mirror");
runTestCases();
