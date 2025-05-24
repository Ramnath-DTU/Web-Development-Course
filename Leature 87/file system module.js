const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    else {
        console.log('Result:', files);
    }
});