const fs = require('fs');
fs.appendFile('NewSet.txt', '\nNew log entry\n', (err) => {
    if (err) throw err;
    console.log('Appended!');
  });