const fs = require('fs');
fs.rename('output.txt', 'NewSet.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
  });