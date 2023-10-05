/*
Problem: Binary Tree Is Balanced
Difficulty: Easy
Description: Write a function to determine if a binary tree is balanced, meaning the depth of the two subtrees of every node never differs by more than 1.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Is Balanced (Easy)
 * File: BinaryTreeIsBalanced.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  if (!root) return true;

  function getHeight(node) {
    if (!node) return 0;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return getHeight(root) !== -1;
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
    const result = isBalanced(tree);

    if (result === expectedOutput) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree28_1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput28_1 = true;
  runTestCase(tree28_1, expectedOutput28_1);

  // Test case 2
  const tree28_2 = arrayToBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
  const expectedOutput28_2 = false;
  runTestCase(tree28_2, expectedOutput28_2);

  // Test case 3
  const tree28_3 = null;
  const expectedOutput28_3 = true;
  runTestCase(tree28_3, expectedOutput28_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Is Balanced");
runTestCases();
