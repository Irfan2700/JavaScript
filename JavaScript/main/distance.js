var utility = require('../Utility/utility.js');

const args = require('yargs').argv;

function distance(){

    n1 = args.x;
    n2 = args.y;
    utility.distance(n1,n2);
}
distance();