import { unlink, access } from 'fs/promises';
import { constants, writeFileSync, stat, statSync } from 'fs'; // Import everything here

// Note: We don't need "const fs = require('fs')" anymore.
// If you want a 'fs' object, use: import * as fs from 'fs';

async function manageFile(filePath) {
  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
    console.log('File deleted successfully.');
  } catch (error) {
    console.log('File not available.');
  }
}

manageFile('./FileToDelete.txt');

// Use the imported writeFileSync directly
writeFileSync('./FileToDelete.txt', 'Sample content added', 'utf-8');
console.log("File created");

stat('FileToDelete.txt', (err, res) => {
  if (err) {
    console.log("Err while getting stats");
  }
  if (res) {
    console.log("Log generated successfully .... \n", res);
    console.log(statSync('FileToDelete.txt').isFile());
  }
});

console.log("Completed");