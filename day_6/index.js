var fs = require("fs")
var myArgs = process.argv.slice(2);
console.log('Argument ', myArgs);

switch (myArgs[0]) {
    case "fs.writeFile":
        fs.writeFile(myArgs[1], myArgs[2], err => {
            if (err) {
                console.error(err)
                return
            }
        });
        break;
    case "fs.readFile":
        fs.readFile(myArgs[1], myArgs[2],'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(data)
        });
        break;

    case "fs.appendFile":
        fs.appendFile(myArgs[1], myArgs[2], err => {
            if (err) {
                console.error(err)
                return
            }
        });
        break;

    case "fs.unlink":
        fs.unlink(myArgs[1], err => {
            if (err) {
                console.error(err)
                return
            }
        });
        break;

    default:
        console.log("wrong input")
}