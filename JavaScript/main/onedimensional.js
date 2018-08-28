var readline = require('readline');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
var n;
read.question("Enter the size of array : ",(n));

var a = new Array[n];
read.on('a',(line) => {
    a.push(line);

    read.close();
});
