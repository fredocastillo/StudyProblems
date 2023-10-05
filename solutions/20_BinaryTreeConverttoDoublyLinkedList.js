/*
Problem: Binary Tree Convert to Doubly Linked List
Difficulty: Medium
Description: Convert a binary search tree to a sorted circular doubly linked list in-place.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Convert to Doubly Linked List (Medium)
 * File: BinaryTreeConvertToDoublyLinkedList.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function treeToDoublyList(root) {
  if (!root) return null;

  let head = null;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    const current = new DoublyListNode(node.val);

    if (!head) {
      head = current;
    } else {
      prev.next = current;
      current.prev = prev;
    }

    prev = current;

    inorder(node.right);
  }

  inorder(root);

  head.prev = prev;
  prev.next = head;

  return head;
}

// Helper function to convert a doubly linked list to an array for testing purposes
function dllToArray(head) {
  if (!head) return [];

  const result = [];
  let current = head;

  do {
    result.push(current.val);
    current = current.next;
  } while (current !== head);

  return result;
}

function runTestCases() {
  let passCount = 0;
  let failCount = 0;

  function runTestCase(tree, expectedOutput) {
    const result = JSON.stringify(dllToArray(treeToDoublyList(tree))) === JSON.stringify(expectedOutput);
    return result;
  }

  // Test case 1
  const tree14_1 = new TreeNode(4);
  tree14_1.left = new TreeNode(2);
  tree14_1.right = new TreeNode(5);
  tree14_1.left.left = new TreeNode(1);
  tree14_1.left.right = new TreeNode(3);

  const expectedOutput14_1 = [1, 2, 3, 4, 5];
  const result14_1 = runTestCase(tree14_1, expectedOutput14_1);

  if (result14_1) {
    passCount++;
    console.log("Test case 1: Passed");
  } else {
    failCount++;
    console.log("Test case 1: Failed");
  }

  // Test case 2
  const tree14_2 = null;
  const expectedOutput14_2 = [];

  const result14_2 = runTestCase(tree14_2, expectedOutput14_2);

  if (result14_2) {
    passCount++;
    console.log("Test case 2: Passed");
  } else {
    failCount++;
    console.log("Test case 2: Failed");
  }

  // Test case 3
  const tree14_3 = new TreeNode(1);
  const expectedOutput14_3 = [1];

  const result14_3 = runTestCase(tree14_3, expectedOutput14_3);

  if (result14_3) {
    passCount++;
    console.log("Test case 3: Passed");
  } else {
    failCount++;
    console.log("Test case 3: Failed");
  }

  // Test case 4
  const tree14_4 = new TreeNode(2);
  tree14_4.left = new TreeNode(1);
  tree14_4.right = new TreeNode(3);

  const expectedOutput14_4 = [1, 2, 3];
  const result14_4 = runTestCase(tree14_4, expectedOutput14_4);

  if (result14_4) {
    passCount++;
    console.log("Test case 4: Passed");
  } else {
    failCount++;
    console.log("Test case 4: Failed");
  }

  // Test case 5
  const tree14_5 = new TreeNode(3);
  tree14_5.left = new TreeNode(1);
  tree14_5.left.right = new TreeNode(2);

  const expectedOutput14_5 = [1, 2, 3];
  const result14_5 = runTestCase(tree14_5, expectedOutput14_5);

  if (result14_5) {
    passCount++;
    console.log("Test case 5: Passed");
  } else {
    failCount++;
    console.log("Test case 5: Failed");
  }

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Convert to Doubly Linked List");
runTestCases();
