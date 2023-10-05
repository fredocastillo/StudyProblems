/*
Problem: Binary Tree All Paths
Difficulty: Medium
Description: Given a binary tree, create a function to return all root-to-leaf paths as a list of lists.
*/

// Your solution goes here
/**
 * Problem: Binary Tree All Paths (Easy)
 * File: BinaryTreeAllPaths.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function binaryTreePaths(root) {
  const result = [];

  function dfs(node, currentPath) {
    if (!node) return;

    currentPath.push(node.val);

    if (!node.left && !node.right) {
      result.push(currentPath.join("->"));
    } else {
      dfs(node.left, currentPath.slice());
      dfs(node.right, currentPath.slice());
    }
  }

  dfs(root, []);

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
    const result = binaryTreePaths(tree);
    if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree18_1 = arrayToBinaryTree([1, 2, 3, null, 5]);
  const expectedOutput18_1 = ["1->2->5", "1->3"];
  runTestCase(tree18_1, expectedOutput18_1);

  // Test case 2
  const tree18_2 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput18_2 = ["1->2->4", "1->2->5", "1->3"];
  runTestCase(tree18_2, expectedOutput18_2);

  // Test case 3
  const tree18_3 = null;
  const expectedOutput18_3 = [];
  runTestCase(tree18_3, expectedOutput18_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree All Paths");
runTestCases();
