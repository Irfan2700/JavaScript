const _ = require('lodash');
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

    
        
}