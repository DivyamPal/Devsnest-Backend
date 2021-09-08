var fs = require("fs")
var myArgs = process.argv.slice(2);
console.log('Argument ', myArgs);

switch (myArgs[0]) {
    case "fs.writeFileSync":
        fs.writeFileSync(myArgs[1], myArgs[2]);
        break;
    case "fs.readFileSync":
        fs.readFileSync(myArgs[1], myArgs[2]);
        break;
    case "fs.appendFileSync":
        fs.appendFileSync(myArgs[1], myArgs[2]);
        break;
    case "fs.unlinkSync":
        fs.unlinkSync(myArgs[1]);
        break;
    default:
        console.log("wrong input")
}