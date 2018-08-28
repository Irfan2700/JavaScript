const _ = require('lodash');
var swap = function(s1,i,j){

        var temp;
        
        var charArray = s1.split("");
        temp = charArray[i] ;
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return  
       
}
module.exports ={
   
    hello : function(userinput)
    {
        if (Object.keys(userinput).length>3){
        console.log("Hey "+userinput+"! How are you");
        
        }else{console.log("Invalid Name!!");}
    },

    coin : function(userinput)
    {  
         var count_t=0, count_h=0;
    
        if(userinput>0){
        
        for(var i=0; i<userinput; i++){    
            var result = Math.random();
            if(result<0.5){
                count_t++;
            }else{count_h++;}
            
        }
        var a = (count_h/userinput)*100;
        var b = (count_t/userinput)*100;
            console.log("Head Percentage: " + a+" %");
            console.log("Tail Percentage: " + b+" %");

        }else{return console.log("Invaild Input");}
    },

    leapyear : function(userinput)
    {
        
        if(Object.keys(userinput).length === 4 && (typeof userinput === 'string'))
        {
            if(userinput%400===0){
                console.log("Its a leap year!!");
            }else if(userinput%4===0){
                console.log("Its a leap year!!");
            } else { console.log("Not a leap year!!");}
            
        } else { console.log("Invalid Year Format");}        
    },
    
    power : function (n)
    {
        var result = 0;
        for(var i=0 ; i<n; i++){
            result = Math.pow(2, i)
         console.log("2^"+i+" = "+result); 
         
        }
      
    },

    harmonic : function (userinput)
    {
        var sum = 0;
        for(var i=1; i<=userinput; i++){
            sum += 1/i;
        }
        console.log("Harmonic Mean is: "+sum);
    },

    primefactor : function (userinput)
    {
        
        var s="";
        var flag = true;
        for (var i=1; i<=userinput ; i++){
            if(userinput%i==0){
                
                for(var j=2; j*j<=i; j++){
                    if(i%j==0){
                        flag = false;
                    }
                }
                if(flag==true){
                    userinput /= i;
                
                console.log(i);
                }
            }
        }
    },

    gambler : function(n1,n2,n3)
    {
        var stake = n1;
        var goal = n2;
        var occur = n3;
        var win=0,loss=0;
        if (stake > 0 && stake <= goal){
        for (var i = 0; i < occur; i++){
        
        if(stake>0 && stake<=goal){
                
            var a = Math.random();

            if(a>=0.5){
                win++;
                console.log("Win the round, Current balance is : "+(++stake));
            }else{
                loss++;
                console.log("Loose the round, Current balance is : " +(--stake));
            }
        }
    }
            var x = (win/(win+loss))*100;
            var y = (loss/(win+loss))*100;
             console.log("Win percentage : "+Math.floor(x)+"%");
             console.log("Loss percentage : " +Math.floor(y)+"%");
        
         
        } else { console.log("Insufficient Amount"); }
    },

    coupon : function (min,max)
    {
        var random=[],ele;
        for(var i=min; i<max; i++){
            //ele = Math.floor(Math.random()*n);
            ele = _.random(min,max)
            random.push(ele);
        }
        console.log(random);
        console.log("No. of coupons generated = "+random.length);
        
        var userSet = new Set(random);
        console.log("Distinct coupon as: "+[...userSet]);
        console.log("No. of distinct coupons = "+[...userSet].length);

    },

    distance : function(n1,n2){
        var result = Math.sqrt((Math.pow(2,n1)+Math.pow(2,n2)));
        console.log("The Distance is : "+Math.round(result));
    },

    quadratic : function(a,b,c){
        var d = (b*b)-(4*a*c);
        var r1 = (-b+Math.sqrt(d));
        var r2 = (-b-Math.sqrt(d));

        console.log("Both Roots of Quadratic equation "+a+"x^2 "+b+"x "+c+" = 0 "+"are : "+Math.round(r1)+" and "+Math.round(r2));
    }

}

    // function permutation(s,l,r){
        

    //     if(l==r){
    //         console.log(s);
    //     }else{
    //         for(var i=l; i<=r; i++){
    //             s = swap(s,l,i);
    //             permutation(s,l+1,r);
    //             s = swap(s,l,i);

    //         }
    //     }
    //     console.log(s);

    // }

    module.exports ={

       // permutation: permutation,
    windchill : function(t,v){

        
        if(t<50 && (v>3 && v<120)){

            var w = (35.74 + 0.6215*t + (0.4275*t-35.75))*Math.pow(0.16,v);

            console.log ("The value of effective temperature is ",w);

        }
    },

    permutation : function(s){

        var str = [];

        if(s.length==0){
            str.push(s);
            return str;
        }

        for (var i=0; i<s.length; i++){
            var first = s[i];
            var charleft = s.substring(0,i)+s.substring(i+1);
            var inner = permutation(charleft);
            for (var j=0; j<inner.length; j++){
                str.push(first+inner[j]);
                console.log(str);
            }
            
        }
        
    },

    twoD : function(read,r,c){

        var limit = r*c;
        var arr1 = [];

        function input(limit){

            if(arr1.length === limit){

                var k=0;
                arr2 = [];
                var string = ' ';
                for (var i=0; i<r; i++){
                    for(var j=0; j<c; j++){

                        string = string + arr1[k]+ ' ';
                        k++;
                    }

                    arr2.push(string);
                    string = ' ';
                }

                for(var l=0; l<arr2.length; l++){
                    console.log(arr2[l]);
                    read.close();
                }
            }
            else{
                read.question(`Please enter the  ${(arr1.length+1)} th value: `, function(ans){
                    arr1.push(ans);
                    input(limit);
                });
            }
        }
        input(limit);
    },

    triplet : function(read,n){

        var arr = [];
        function input(n){
        if(arr.length>=n){

            read.close();
            for(var i=0; i<arr.length; i++){
                for(var j=i+1; j<arr.length; j++){
                    for(var k=j+1; k<arr.length; k++){

                        if((Number(arr[i])+Number(arr[j])+Number(arr[k]))===0){
                            if((Number(arr[i])!==Number(arr[j]))!== (Number(arr[k]))){
                            console.log("the Triplets are : "+arr[i]+" "+arr[j]+" "+arr[k]+" ");
                            
                         }
                        }
                    }
                }
            }

        }else{

            read.question(`Enter the array element ${(arr.length+1)}th value : `,function(ans){
                arr.push(ans);
                input(n);
            });
        }

       

        }
        input(n);
    },

    getCurrentTime : function(){
        var obj = new Date();
        var start = obj.getTime();
        return start;
    },

    timeDifference : function(startTime,stopTime){

        var r = (stopTime - startTime)/1000;
        return r;
    }
        
        
}



