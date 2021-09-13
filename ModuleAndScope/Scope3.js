//What is the result of excuting the following javascript code
var b=1000;
function g(){
    var a=100;
    b=10;
    var z=a+b;
    console.log(z);//110
    function f(z){
        return 2*z;//40
    }
    var b=20;
    console.log(f(b));//40

}
g();
console.log(b);//1000