const path = require('path');

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__dirname));


console.log(path.join(__dirname, 'files', 'test.txt'));
