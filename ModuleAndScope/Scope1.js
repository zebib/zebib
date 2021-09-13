x = 1;
                var a = 5;
                var b = 10;
                var c = function(a, b, c) {
                var x = 10;
                console.log(x);  //i//10
                console.log(a);  //ii//8
                var f = function(a, b, c) {
                        b = a;//a=8 ,b=a, b=8
                        console.log(b);  //iii//8
                        b = c;
                        var x = 5;
                    }
                f(a,b,c);
                console.log(b);  //iv//9
             }
            c(8,9,10);
            console.log(b);//10
            console.log(x);//1
