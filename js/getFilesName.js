var fs = require('fs');

function getFilesName(dirPath) {
    return fs.readdirSync(dirPath);
}

// var files = getFilesName('./data/1949/');
// console.log(files)