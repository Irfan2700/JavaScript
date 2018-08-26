var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function harmonic(userinput) {
    read.question("Enter the Number: ", function(userinput){
        utility.harmonic(userinput);
        read.close();
    });
}
harmonic();