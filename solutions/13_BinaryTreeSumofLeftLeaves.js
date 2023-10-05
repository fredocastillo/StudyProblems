/*
Problem: Binary Tree Sum of Left Leaves
Difficulty: Easy
Description: Write a function to find the sum of all left leaves in a given binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Sum of Left Leaves (Easy)
 * File: BinaryTreeSumOfLeftLeaves.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfLeftLeaves(root) {
  if (!root) return 0;

  let sum = 0;

  function dfs(node, isLeft) {
    if (!node) return;

    if (!node.left && !node.right && isLeft) {
      sum += node.val;
    }

    dfs(node.left, true);
    dfs(node.right, false);
  }

  dfs(root, false);

  return sum;
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
    const result = sumOfLeftLeaves(tree);
    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree20_1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput20_1 = 24;
  runTestCase(tree20_1, expectedOutput20_1);

  // Test case 2
  const tree20_2 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput20_2 = 4;
  runTestCase(tree20_2, expectedOutput20_2);

  // Test case 3
  const tree20_3 = null;
  const expectedOutput20_3 = 0;
  runTestCase(tree20_3, expectedOutput20_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Sum of Left Leaves");
runTestCases();
