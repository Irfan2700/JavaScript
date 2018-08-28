var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


function permutation(){

    read.question("Enter the String : ", function(s){

        utility.permutation(s);
        read.close();
    });
}
permutation();