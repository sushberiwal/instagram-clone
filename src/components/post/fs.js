let fs = require("fs");

function writeFile(path , data){
    fs.writeFileSync(path , data);
}
module.exports = writeFile;