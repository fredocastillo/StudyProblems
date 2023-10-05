/*
Problem: Binary Tree Serialize and Deserialize
Difficulty: Hard
Description: Implement functions to serialize and deserialize a binary tree.
*/

// Your solution goes here
/**
 * Problem: Binary Tree Serialize and Deserialize (Hard)
 * File: BinaryTreeSerializeDeserialize.js
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serialize(root) {
  if (!root) return 'null';

  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left},${right}`;
}

function deserialize(data) {
  const nodes = data.split(',');

  function buildTree() {
    const val = nodes.shift();
    if (val === 'null') return null;

    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
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
    const serializedTree = serialize(tree);
    const deserializedTree = deserialize(serializedTree);

    const result = JSON.stringify(deserializedTree);

    if (result === JSON.stringify(expectedOutput)) {
      passCount++;
      console.log("Test case Passed");
    } else {
      failCount++;
      console.log("Test case Failed");
    }
  }

  // Test case 1
  const tree25_1 = arrayToBinaryTree([1, 2, 3, null, null, 4, 5]);
  const expectedOutput25_1 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  };
  runTestCase(tree25_1, expectedOutput25_1);

  // Test case 2
  const tree25_2 = arrayToBinaryTree([1, 2, 3, null, null, null, 4, 5]);
  const expectedOutput25_2 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };
  runTestCase(tree25_2, expectedOutput25_2);

  // Test case 3
  const tree25_3 = null;
  const expectedOutput25_3 = null;
  runTestCase(tree25_3, expectedOutput25_3);

  console.log("\nTest Results:");
  console.log("Passed: " + passCount);
  console.log("Failed: " + failCount);
}

console.log("File Name: Binary Tree Serialize Deserialize");
runTestCases();
