/*
Problem: Binary Tree Vertical Order Traversal
Difficulty: Medium
Description: Implement a function to return the vertical order traversal of a binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Vertical Order Traversal (Medium)
 * File: BinaryTreeVerticalOrderTraversal.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function verticalOrder(root) {
  if (!root) return [];

  const columnTable = new Map();
  const queue = [{ node: root, column: 0 }];

  while (queue.length) {
    const { node, column } = queue.shift();

    if (!columnTable.has(column)) {
      columnTable.set(column, []);
    }

    columnTable.get(column).push(node.val);

    if (node.left) {
      queue.push({ node: node.left, column: column - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, column: column + 1 });
    }
  }

  const columns = Array.from(columnTable.keys()).sort((a, b) => a - b);

  const result = [];
  for (const column of columns) {
    result.push(columnTable.get(column));
  }

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
    const result = verticalOrder(tree);

    if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree21_1 = arrayToBinaryTree([3, 9, 8, 4, 0, 1, 7]);
  const expectedOutput21_1 = [[4], [9], [3, 0, 1], [8], [7]];
  runTestCase(tree21_1, expectedOutput21_1);

  // Test case 2
  const tree21_2 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput21_2 = [[9], [3, 15], [20], [7]];
  runTestCase(tree21_2, expectedOutput21_2);

  // Test case 3
  const tree21_3 = null;
  const expectedOutput21_3 = [];
  runTestCase(tree21_3, expectedOutput21_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Vertical Order Traversal");
runTestCases();
