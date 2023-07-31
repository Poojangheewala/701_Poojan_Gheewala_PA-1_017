const zlib = require('zlib');
const fs = require('fs');

const inputFile = fs.createReadStream('hello.zip');
const outputFile = fs.createWriteStream('hello1.txt');

inputFile.pipe(zlib.createUnzip()).pipe(outputFile);   