/**DEPENDENCIES & PACKAGES - Expect the nodejs, npm, vargs, readline, lodash to be installed
 */

/*********************************************************************************************************************
*  Execution       :   1. default node         cmd> node utility.js 
*                      2. if nodemon installed cmd> nodemon utility.js
* 
*  Purpose         : Logic for all functional programs.
* 
*  @description    : This file contains all the logic for many different programs and all logic is converted to public 
*                    (export) as its can be accessed.
* 
*  @file           : utility.js
*  @overview       : utility module which contains logic of all Functional codes.
*  @module         : utility - This is optional if expeclictly its an npm or local package
*  @author         : Irfan2700 <https://github.com/Irfan2700>
*  @version        : 1.0
*  @since          : 23-08-2018
*
**********************************************************************************************************************
**********************************************************************************************************************/
/**@param 
 * 
 * */

const _ = require('lodash');

/**
 * @description : exporting all the function definition and make accessible to public
 * @returns : object of the calling class
 */
module.exports = {

    hello: function (userinput) {
        /**
         * @description : logic for 'hello' function
         * @param {string}  userinput is a string input that pass as argument of function
         */
        if(isNaN(userinput)){
        if (Object.keys(userinput).length > 3) {                    //checking that the size of the 'userinput' is greater than 3
            console.log("Hey " + userinput + "! How are you");      //printing the output

        } else { console.log("Invalid Name!!"); }                   //else condition for "Invalid output"
    }else{console.log("Invaild Entry!!");}
    },


    coin: function (userinput) {
        /**
     * @description : logic for 'coin' function
     * @param {Number} userinput any number
     * @param {Number} count_t for tails counting
     * @param {Number} count_h for heads counting
     * @param {Number} result for storing the decimal number 
     * @param {Number} a number input
     * @param {Number} b number input 
     */

        var count_t = 0, count_h = 0;

        if (userinput > 0) {

            for (var i = 0; i < userinput; i++) {
                var result = Math.random();                  //return the value between 0 to 1, i.e double
                if (result < 0.5) {
                    count_t++;                               //post Increment
                } else { count_h++; }                        //post Increment

            }
            var a = (count_h / userinput) * 100;             //calculation the percentage of heads & store in a
            var b = (count_t / userinput) * 100;             //calculation the percentage of tails & store in b
            console.log("Head Percentage: " + a + " %");
            console.log("Tail Percentage: " + b + " %");

        } else { return console.log("Invaild Input"); }
    },

    leapyear: function (userinput) {
        /**
         * @description : logic for the 'leapyear' function
         * @param {Number} userinput is any year in number
         */

         if(typeof userinput === 'string'){
        if (Object.keys(userinput).length === 4) {      //for checking the year format as 'YYYY',
            //for checking that input is only a Number

            if (userinput % 400 === 0) {                                                   //Nested if condition statement
                console.log("Its a leap year!!");
            } else if (userinput % 4 === 0) {
                console.log("Its a leap year!!");
            } else { console.log("Not a leap year!!"); }

        } else { console.log("Invalid Year Format"); }
    } else { console.log("Invalid Year Format"); }
    },

    power: function (n) {

        /**
         * @description : logic for power function to print the series of result 2^n numbers 
         * @param {Number} n is any number whose use as the power of 2
         * @param {Number} result is stored the value of the power of 2
         */

        var result = 0;
        for (var i = 0; i < n; i++) {                                           //for loop which iterate from 0 to n-1
            result = Math.pow(2, i)                                             //return random double type number from 0 to 1
            console.log("2^" + i + " = " + result);                             //printing the result with concadination of string

        }
    },

    harmonic: function (userinput) {

        /**
         * @description : logic for harmonic function to print the harmonic mean of the userinput number
         * @param {Number} userinput is any number upto which the harmonic mean is required
         * @param {Number} sum is storing the harmonic mean upto n
         */

        var sum = 0;                                                    
        for (var i = 1; i <= userinput; i++) {
            sum += 1 / i;                                           //adding the 'sum' to itself at every iteration of 'i'
        }
        console.log("Harmonic Mean is: " + sum);                   //printing the output
    },

    primefactor: function (userinput) {

        /**
         * @description : logic for finding the prime factors of a userinput number
         * @param {Number} userinput is number 
         */

        var s = "";
        var flag = true;
        for (var i = 1; i <= userinput; i++) {
            if (userinput % i == 0) {

                for (var j = 2; j * j <= i; j++) {
                    if (i % j == 0) {
                        flag = false;
                    }
                }
                if (flag == true) {
                    userinput /= i;

                    console.log(i);
                }
            }
        }
    },

    gambler: function (n1, n2, n3) {
        var stake = n1;
        var goal = n2;
        var occur = n3;
        var win = 0, loss = 0;
        if (stake > 0 && stake <= goal) {
            for (var i = 0; i < occur; i++) {

                if (stake > 0 && stake <= goal) {

                    var a = Math.random();

                    if (a >= 0.5) {
                        win++;
                        console.log("Win the round, Current balance is : " + (++stake));
                    } else {
                        loss++;
                        console.log("Loose the round, Current balance is : " + (--stake));
                    }
                }
            }
            var x = (win / (win + loss)) * 100;
            var y = (loss / (win + loss)) * 100;
            console.log("Win percentage : " + Math.floor(x) + "%");
            console.log("Loss percentage : " + Math.floor(y) + "%");


        } else { console.log("Insufficient Amount"); }
    },

    coupon: function (min, max) {
        var random = [], ele;
        for (var i = min; i < max; i++) {
            //ele = Math.floor(Math.random()*n);
            ele = _.random(min, max)
            random.push(ele);
        }
        console.log(random);
        console.log("No. of coupons generated = " + random.length);

        var userSet = new Set(random);
        console.log("Distinct coupon as: " + [...userSet]);
        console.log("No. of distinct coupons = " + [...userSet].length);

    },

    distance: function (n1, n2) {
        var result = Math.sqrt((Math.pow(2, n1) + Math.pow(2, n2)));
        console.log("The Distance is : " + Math.round(result));
    },

    quadratic: function (a, b, c) {
        var d = (b * b) - (4 * a * c);
        var r1 = (-b + Math.sqrt(d));
        var r2 = (-b - Math.sqrt(d));

        console.log("Both Roots of Quadratic equation " + a + "x^2 " + b + "x " + c + " = 0 "
            + "are : " + Math.round(r1) + " and " + Math.round(r2));
    },

    windchill: function (t, v) {


        if (t < 50 && (v > 3 && v < 120)) {

            var w = (35.74 + 0.6215 * t + ((0.4275 * t) - 35.75)) * Math.pow(0.16, v);

            console.log("The value of effective temperature is ", w);

        }
    },


    twoD: function (read, r, c) {

        var limit = r * c;
        var arr1 = [];

        function input(limit) {

            if (arr1.length === limit) {

                var k = 0;
                arr2 = [];
                var string = ' ';
                for (var i = 0; i < r; i++) {
                    for (var j = 0; j < c; j++) {

                        string = string + arr1[k] + ' ';
                        k++;
                    }

                    arr2.push(string);
                    string = ' ';
                }

                for (var l = 0; l < arr2.length; l++) {
                    console.log(arr2[l]);
                    read.close();
                }
            }
            else {
                read.question(`Please enter the  ${(arr1.length + 1)} th value: `, function (ans) {
                    arr1.push(ans);
                    input(limit);
                });
            }
        }
        input(limit);
    },

    triplet: function (read, n) {

        var arr = [];
        function input(n) {
            if (arr.length >= n) {


                var resSet = new Set();
                var int1Array = [];

                read.close();
                for (var i = 0; i < arr.length; i++) {
                    for (var j = i + 1; j < arr.length; j++) {
                        for (var k = j + 1; k < arr.length; k++) {

                            if ((Number(arr[i]) + Number(arr[j]) + Number(arr[k])) === 0) {

                                var testSet = new Set();
                                testSet.add(Number(arr[i]));
                                testSet.add(Number(arr[j]));
                                testSet.add(Number(arr[k]));

                                if (testSet.size === 3) {
                                    int1Array = Array.from(testSet);
                                    resSet.add(int1Array);
                                }
                            }
                        }
                    }


                }
                console.log([...resSet]);


            } else {

                read.question(`Enter the array element ${(arr.length + 1)}th value : `, function (ans) {
                    arr.push(ans);
                    input(n);
                });
            }



        }
        input(n);
    },

    getCurrentTime: function () {
        var obj = new Date();
        var start = obj.getTime();
        return start;
    },

    timeDifference: function (startTime, stopTime) {

        var r = (stopTime - startTime) / 1000;
        return r;
    },

    swap: function (stArray, index1, index2) {
        var temp = stArray[index1];
        stArray[index1] = stArray[index2];
        stArray[index2] = temp;
        return stArray;
    },

    permute: function (stArray, startIndex, endIndex) {
        if (startIndex === endIndex) {
            console.log(stArray.join(''));

        } else {
            var i;
            for (i = startIndex; i <= endIndex; i++) {
                this.swap(stArray, startIndex, i);
                this.permute(stArray, startIndex + 1, endIndex);
                this.swap(stArray, i, startIndex); // backtrack
            }
        }


    }


}




