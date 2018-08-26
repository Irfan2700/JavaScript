var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function leapyear(){
    read.question("Enter the year: ",function(userinput){
        utility.leapyear(userinput);
        read.close();
    });
}
leapyear();