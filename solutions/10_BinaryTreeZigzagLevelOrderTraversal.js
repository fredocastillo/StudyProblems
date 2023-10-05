/*
Problem: Binary Tree Zigzag Level Order Traversal
Difficulty: Medium
Description: Modify your level order traversal code to traverse the tree in a zigzag pattern (left to right for the first level, right to left for the second, and so on).
*/

// Your solution goes here
/**
 * Problem: Binary Tree Zigzag Level Order Traversal (Medium)
 * File: BinaryTreeZigzagLevelOrderTraversal.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let reverse = false;

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (reverse) {
        level.unshift(node.val);
      } else {
        level.push(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
    reverse = !reverse;
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
    const result = zigzagLevelOrder(tree);

    if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree23_1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
  const expectedOutput23_1 = [[3], [20, 9], [15, 7]];
  runTestCase(tree23_1, expectedOutput23_1);

  // Test case 2
  const tree23_2 = arrayToBinaryTree([1, 2, 3, 4, 5]);
  const expectedOutput23_2 = [[1], [3, 2], [4, 5]];
  runTestCase(tree23_2, expectedOutput23_2);

  // Test case 3
  const tree23_3 = null;
  const expectedOutput23_3 = [];
  runTestCase(tree23_3, expectedOutput23_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Zigzag Level Order Traversal");
runTestCases();
