var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function quadratic() {

    read.question("Enter the First Number: ", function(x){
        read.question("Enter the Second Number: ", function(y){
            read.question("Enter the Third Number: ", function(z){
                utility.quadratic(x,y,z);
                read.close();
            });
        });
    });
}
quadratic();