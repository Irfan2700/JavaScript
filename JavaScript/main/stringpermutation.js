var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function permutation(){

    read.question("Enter a String : ", (string)=>{
        var stArray = string.split('');
        utility.permute(stArray, 0, stArray.length-1);
        // console.log(stArray.join(''));
        read.close();
    });
}
permutation();