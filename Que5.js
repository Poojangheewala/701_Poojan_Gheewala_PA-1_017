const zlib = require('zlib');
const fs = require('fs');

const inputFile = fs.createReadStream('hello.txt');
const outputFile = fs.createWriteStream('hello.zip');

inputFile.pipe(zlib.createGzip()).pipe(outputFile);    