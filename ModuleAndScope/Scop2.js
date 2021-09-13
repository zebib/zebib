/*var x=9;
function myFunction(){
    return x*x;
}
console.log(myFunction());//81
x=5;
console.log(myFunction());//25*/

var foo=1;
function bar(){
    if(!foo){//if not foo
        var foo=10;
    }
alert(foo);//10
}
bar(); //result-> alert 10 then undefined

var add=(function(){
    var counter=0;
    return function(){
        return counter =counter + 1;//return counter+=1;
    }
    
})();
