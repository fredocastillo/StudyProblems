const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// Define the directory containing JavaScript files
const directoryPath = './solutions'; // Replace with your directory path

// Get a list of JavaScript files in the directory
const jsFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.js'));

// Function to run a JavaScript file and handle exceptions
function runJavaScriptFile(filePath, fileName) {
  try {
    console.log("-----------------------------------------------------------")
    console.log(`Running file: ${fileName}`);
    execFileSync('node', [filePath], { stdio: 'inherit' });
    console.log(`File executed successfully: ${fileName}`);
  } catch (error) {
    console.error(`Error running file ${fileName}:`);
    // console.error(error.message);
  }
}

// Loop through the JavaScript files and run them
jsFiles.forEach(fileName => {
  const filePath = path.join(directoryPath, fileName);
  runJavaScriptFile(filePath, fileName);
});
