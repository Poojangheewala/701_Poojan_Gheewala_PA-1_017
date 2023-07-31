const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

// Function to delete a file using the promisified unlink
async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`File "${filePath}" successfully deleted.`);
    } catch (error) {
        console.error(`Error deleting file "${filePath}": ${error.message}`);
    }
}

// Usage example: Call the deleteFile function
const filePathToDelete = 'Assignment-1.zip';
deleteFile(filePathToDelete);
