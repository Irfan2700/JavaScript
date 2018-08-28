var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
var startTime = 0;
function watch(){

    read.question("Enter 1 to start : ", (start) => {
        if(start == 1){

            startTime = utility.getCurrentTime();

            read.question("Enter 0 to stop : ", (stopTime) => {
                var stopTime = utility.getCurrentTime();
                var result = utility.timeDifference(startTime,stopTime);
                console.log("Elapsed time : "+result+" seconds");
                read.close();
            });
        }
    });
}
watch();