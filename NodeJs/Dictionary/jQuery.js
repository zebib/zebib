$("#submit").click=findword;

function handleResponse(responseObj) {
    console.log("Bereket");
    console.log("response is "+responseObj.status+" and "+responseObj.text);
     
       $(".main").html(responseObj).css("color","red");
    
}

function findword () {
    console.log("Feruza");
    var where = $("#form").attr("action");
    console.log("Zebiba");
    var fe = $("#wordSearch").val();
    console.log("Brktina");
    var what = { wordSearch: fe };
    $.get( where, what, handleResponse, "json");
}  