/*
Problem: Binary Tree Count Univalue Subtrees
Difficulty: Medium
Description: Implement a function to count the number of univalue subtrees in a binary tree. A univalue subtree has all nodes with the same value.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Count Univalue Subtrees (Medium)
 * File: BinaryTreeCountUnivalueSubtrees.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countUnivalSubtrees(root) {
  let count = 0;

  function isUnival(node, parentVal) {
    if (!node) return true;

    if (!isUnival(node.left, node.val) || !isUnival(node.right, node.val)) return false;

    count++;

    return node.val === parentVal;
  }

  isUnival(root, null);

  return count;
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
    const result = countUnivalSubtrees(tree);
    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree16_1 = arrayToBinaryTree([5, 1, 5, null, null, 5, 5]);
  const expectedOutput16_1 = 4;
  runTestCase(tree16_1, expectedOutput16_1);

  // Test case 2
  const tree16_2 = arrayToBinaryTree([1, 1, 1, 5, 1, null, 5]);
  const expectedOutput16_2 = 4;
  runTestCase(tree16_2, expectedOutput16_2);

  // Test case 3
  const tree16_3 = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7]);
  const expectedOutput16_3 = 7;
  runTestCase(tree16_3, expectedOutput16_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Count Univalue Subtrees");
runTestCases();
