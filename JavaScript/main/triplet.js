var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function triplet(){

    read.question("Enter the total Number of Integer : ", function(n){

        utility.triplet(read,n);
    });
}
triplet();