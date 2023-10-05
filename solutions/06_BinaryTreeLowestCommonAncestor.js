/*
Problem: Binary Tree Lowest Common Ancestor
Difficulty: Medium
Description: Given two nodes in a binary tree, find their lowest common ancestor.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Lowest Common Ancestor (Medium)
 * File: BinaryTreeLowestCommonAncestor.js
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

  if (root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  } else if (left) {
    return left;
  } else {
    return right;
  }
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

  function runTestCase(tree, pVal, qVal, expectedOutput) {
    const p = new TreeNode(pVal);
    const q = new TreeNode(qVal);
    const result = lowestCommonAncestor(tree, p, q);

    if ((result && result.val === expectedOutput) || result === null) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree27_1 = arrayToBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  const pVal1 = 5;
  const qVal1 = 1;
  const expectedOutput27_1 = 3;
  runTestCase(tree27_1, pVal1, qVal1, expectedOutput27_1);

  // Test case 2
  const tree27_2 = arrayToBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  const pVal2 = 5;
  const qVal2 = 4;
  const expectedOutput27_2 = 5;
  runTestCase(tree27_2, pVal2, qVal2, expectedOutput27_2);

  // Test case 3
  const tree27_3 = null;
  const pVal3 = 0;
  const qVal3 = 0;
  const expectedOutput27_3 = null;
  runTestCase(tree27_3, pVal3, qVal3, expectedOutput27_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Lowest Common Ancestor");
runTestCases();
