var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function primefactor(){
    read.question("Enter the number : ", function (userinput) {
        utility.primefactor(userinput);
        read.close();
    });
}
primefactor();