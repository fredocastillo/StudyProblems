/*
Problem: Binary Tree Inorder Successor
Difficulty: Medium
Description: Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Inorder Successor (Medium)
 * File: BinaryTreeInorderSuccessor.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function inorderSuccessor(root, p) {
  let successor = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (node.val > p.val && !successor) {
      successor = node;
      return;
    }

    inorder(node.right);
  }

  inorder(root);

  return successor;
}

// Helper function to construct a binary tree from an array
function arrayToBinaryTree(arr, parent = null) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  root.parent = parent;

  if (arr.length > 1) {
    root.left = arrayToBinaryTree(arr.slice(1, Math.ceil(arr.length / 2) + 1), root);
    root.right = arrayToBinaryTree(arr.slice(Math.ceil(arr.length / 2) + 1), root);
  }

  return root;
}

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, pVal, expectedOutput) {
    const p = new TreeNode(pVal);
    const result = inorderSuccessor(tree, p);

    if ((result && result.val === expectedOutput) || result === null) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree22_1 = arrayToBinaryTree([2, 1, 3]);
  const pVal1 = 1;
  const expectedOutput22_1 = 2;
  runTestCase(tree22_1, pVal1, expectedOutput22_1);

  // Test case 2
  const tree22_2 = arrayToBinaryTree([5, 3, 6, 2, 4, null, null, 1]);
  const pVal2 = 6;
  const expectedOutput22_2 = null;
  runTestCase(tree22_2, pVal2, expectedOutput22_2);

  // Test case 3
  const tree22_3 = null;
  const pVal3 = 1;
  const expectedOutput22_3 = null;
  runTestCase(tree22_3, pVal3, expectedOutput22_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Inorder Successor");
runTestCases();
