function calcTip(){
    let x = parseInt(document.getElementById("subtotal").value);
    let y = parseInt(document.getElementById("tip").value);
    let result = x + x*(y/100) ;
    document.getElementById("total").innerHTML = "$ "+ result;
  
}