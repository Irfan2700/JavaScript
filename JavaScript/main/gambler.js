var utility = require('../Utility/utility.js');

'use strict';
const args = require('yargs').argv;

function gambler(){
   
    n1 = args.stake;
    n2 = args.goal;
    n3 = args.occur;
    utility.gambler(n1,n2,n3);
}
gambler();