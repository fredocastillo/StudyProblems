/*
Problem: Binary Tree Lowest Common Ancestor (BST Version)
Difficulty: Easy
Description: Given a binary search tree and two nodes, write a function to find their lowest common ancestor.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Lowest Common Ancestor (BST Version) (Medium)
 * File: BinaryTreeLowestCommonAncestorBST.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// Helper function to construct a BST from an array
function arrayToBST(arr) {
  if (!arr.length) return null;

  const mid = Math.floor(arr.length / 2);
  const root = new TreeNode(arr[mid]);

  root.left = arrayToBST(arr.slice(0, mid));
  root.right = arrayToBST(arr.slice(mid + 1));

  return root;
}

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, p, q, expectedOutput) {
    const result = lowestCommonAncestor(tree, p, q);
    if ((!result && !expectedOutput) || (result && expectedOutput && result.val === expectedOutput.val)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree13_1 = arrayToBST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const p1 = new TreeNode(2);
  const q1 = new TreeNode(8);

  const expectedOutput13_1 = new TreeNode(6);
  const result13_1 = runTestCase(tree13_1, p1, q1, expectedOutput13_1);

  // Test case 2
  const tree13_2 = arrayToBST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const p2 = new TreeNode(2);
  const q2 = new TreeNode(4);

  const expectedOutput13_2 = new TreeNode(2);
  const result13_2 = runTestCase(tree13_2, p2, q2, expectedOutput13_2);

  // Test case 3
  const tree13_3 = arrayToBST([2, 1, 3]);
  const p3 = new TreeNode(2);
  const q3 = new TreeNode(3);

  const expectedOutput13_3 = new TreeNode(2);
  const result13_3 = runTestCase(tree13_3, p3, q3, expectedOutput13_3);

  // Test case 4
  const tree13_4 = null;
  const p4 = new TreeNode(1);
  const q4 = new TreeNode(2);

  const expectedOutput13_4 = null;
  const result13_4 = runTestCase(tree13_4, p4, q4, expectedOutput13_4);

  // Test case 5
  const tree13_5 = arrayToBST([1]);
  const p5 = new TreeNode(1);
  const q5 = new TreeNode(1);

  const expectedOutput13_5 = new TreeNode(1);
  const result13_5 = runTestCase(tree13_5, p5, q5, expectedOutput13_5);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Lowest Common Ancestor (BST Version)");
runTestCases();
