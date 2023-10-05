/*
Problem: Binary Tree Path Sum
Difficulty: Easy
Description: Determine if the tree has a root-to-leaf path such that adding up all the values along the path equals a given sum.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Path Sum (Easy)
 * File: BinaryTreePathSum.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function hasPathSum(root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return sum === root.val;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
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

  function runTestCase(tree, sum, expectedOutput) {
    const result = hasPathSum(tree, sum);

    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree26_1 = arrayToBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
  const sum1 = 22;
  const expectedOutput26_1 = true;
  runTestCase(tree26_1, sum1, expectedOutput26_1);

  // Test case 2
  const tree26_2 = arrayToBinaryTree([1, 2, 3]);
  const sum2 = 5;
  const expectedOutput26_2 = false;
  runTestCase(tree26_2, sum2, expectedOutput26_2);

  // Test case 3
  const tree26_3 = null;
  const sum3 = 0;
  const expectedOutput26_3 = false;
  runTestCase(tree26_3, sum3, expectedOutput26_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Path Sum");
runTestCases();
