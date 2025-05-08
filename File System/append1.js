const fs = require('fs');
fs.appendFile('notes.txt', '\nAppended note content.', (err) => {
    if (err) throw err;
    console.log('Appended!');
  });