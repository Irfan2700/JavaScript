var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var a = [];

function twodimention(){
    read.question("Enter the row elements: ", function(r){

            
        read.question("Enter the column elements: ", function (c) {
            
            utility.twoD(read,r,c);
        });
    });
}
twodimention();