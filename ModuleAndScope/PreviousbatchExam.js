//Number-1/// var x=1;
// function z(){
//     console.log(x);//2=>undefined
//     x=2;
//     if(x>0){
//         var x=3;
//         console.log(x);// 3->3
//     }
    
//     var f=function x(){
//         console.log(x);//5=5
//     }
//     console.log(x);//4=3
//     f(5);

// }
// console.log(x);//1->1
// z();
// console.log(x);//6-1
/////===============================****************===============================////////////////
//Number-2 question
// var a=10;
// function f(){
//     var b=20;
//     function g(){
//         var c=a+b;//c=40
//         return c;//1-> 40
//     }
//     b=30;
//     return g;
// }
// myFunc=f();
// x=myFunc(); //40
// console.log(x);//2->40
// a=100;
// y=myFunc();//3->130
// console.log(y);

//Number -3
// var Account=(function(){
//     var Balance=0;  // private 
//     var AccNo=0;   //private
//     var Owner=""; //private

//     var getBalance=function(){// private method
//         return Balance;

//     }

//     var setBalance=function(newBance){//private method
// Balance=newBance;
//     }

//     var open=function(Balance,AccNo,Owner){//public method
// setBalance(Balance);
// AccNo=AccNo;
// Owner=Owner;

//     }
//     var deposite=function(Amount){//public method
//       setBalance(getBalance()+ Amount);
//     }
//     return {
//         // return your Object Here
//     }
// })();

//Number 4