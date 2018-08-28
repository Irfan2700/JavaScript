var utility = require('../Utility/utility.js');

const args = require('yargs').argv;

function windchill(){

    t = args.t;
    v = args.v;
    utility.windchill(t,v);
}
windchill();