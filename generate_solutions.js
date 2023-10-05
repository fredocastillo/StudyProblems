const fs = require('fs');

// List of problems with titles, difficulties, and descriptions
const problems = [
  {
    title: 'Binary Tree Traversal',
    difficulty: 'Easy',
    description: 'Implement a function to perform an inorder traversal of a binary tree.',
  },
  {
    title: 'Binary Tree Maximum Depth',
    difficulty: 'Easy',
    description: 'Write a function to find the maximum depth (height) of a binary tree.',
  },
  {
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    description: 'Create a function to perform a level order traversal of a binary tree.',
  },
  {
    title: 'Binary Tree Diameter',
    difficulty: 'Medium',
    description: 'Find the diameter of a binary tree, which is the length of the longest path between any two nodes.',
  },
  {
    title: 'Binary Tree Is Balanced',
    difficulty: 'Easy',
    description: 'Write a function to determine if a binary tree is balanced, meaning the depth of the two subtrees of every node never differs by more than 1.',
  },
  {
    title: 'Binary Tree Lowest Common Ancestor',
    difficulty: 'Medium',
    description: 'Given two nodes in a binary tree, find their lowest common ancestor.',
  },
  {
    title: 'Binary Tree Path Sum',
    difficulty: 'Easy',
    description: 'Determine if the tree has a root-to-leaf path such that adding up all the values along the path equals a given sum.',
  },
  {
    title: 'Binary Tree Serialize and Deserialize',
    difficulty: 'Hard',
    description: 'Implement functions to serialize and deserialize a binary tree.',
  },
  {
    title: 'Binary Tree Mirror',
    difficulty: 'Easy',
    description: 'Convert a binary tree to its mirror image by swapping the left and right subtrees.',
  },
  {
    title: 'Binary Tree Zigzag Level Order Traversal',
    difficulty: 'Medium',
    description: 'Modify your level order traversal code to traverse the tree in a zigzag pattern (left to right for the first level, right to left for the second, and so on).',
  },
  {
    title: 'Binary Tree Inorder Successor',
    difficulty: 'Medium',
    description: 'Given a binary search tree and a node in it, find the in-order successor of that node in the BST.',
  },
  {
    title: 'Binary Tree Vertical Order Traversal',
    difficulty: 'Medium',
    description: 'Implement a function to return the vertical order traversal of a binary tree.',
  },
  {
    title: 'Binary Tree Sum of Left Leaves',
    difficulty: 'Easy',
    description: 'Write a function to find the sum of all left leaves in a given binary tree.',
  },
  {
    title: 'Binary Tree Tilt',
    difficulty: 'Easy',
    description: 'Calculate the tilt of a binary tree. The tilt of a binary tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values.',
  },
  {
    title: 'Binary Tree All Paths',
    difficulty: 'Medium',
    description: 'Given a binary tree, create a function to return all root-to-leaf paths as a list of lists.',
  },
  {
    title: 'Binary Tree Trim',
    difficulty: 'Easy',
    description: 'Given a binary search tree and two values, trim the tree so that all elements are between those two values.',
  },
  {
    title: 'Binary Tree Count Univalue Subtrees',
    difficulty: 'Medium',
    description: 'Implement a function to count the number of univalue subtrees in a binary tree. A univalue subtree has all nodes with the same value.',
  },
  {
    title: 'Binary Tree Maximum Sum Path',
    difficulty: 'Hard',
    description: 'Find the maximum path sum between any two nodes in a binary tree. The path may start and end at any node in the tree.',
  },
  {
    title: 'Binary Tree Lowest Common Ancestor (BST Version)',
    difficulty: 'Easy',
    description: 'Given a binary search tree and two nodes, write a function to find their lowest common ancestor.',
  },
  {
    title: 'Binary Tree Convert to Doubly Linked List',
    difficulty: 'Medium',
    description: 'Convert a binary search tree to a sorted circular doubly linked list in-place.',
  },
];

// Directory to save the JavaScript files
const outputDirectory = './solutions';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Loop through the problems and create JavaScript files
problems.forEach((problem, index) => {
  const titleWithoutSpaces = problem.title.replace(/ /g, '');
  const filename = `${outputDirectory}/${(index + 1).toString().padStart(2, '0')}_${titleWithoutSpaces}.js`;
  const content = `/*\nProblem: ${problem.title}\nDifficulty: ${problem.difficulty}\nDescription: ${problem.description}\n*/\n\n// Your solution goes here\n`;

  fs.writeFileSync(filename, content);

  console.log(`Created ${filename}`);
});

console.log('JavaScript files generated successfully!');
