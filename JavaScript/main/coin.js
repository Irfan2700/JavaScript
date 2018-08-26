var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

function coin(){

    read.question("Enter the number of time fliping the coin: ",function(userinput){

        utility.coin(userinput);
        read.close();
    });
}
coin();
