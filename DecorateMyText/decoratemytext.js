function hello() {
    alert("Hello, World!");
}

function interval() {
    var id = setInterval(enlargeText, 1000);
    setTimeout(clearInterval, 5000, id);
}
function boldText() {
    if (document.getElementById("bling").checked == true) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "red";
        document.getElementById("textarea").style.textDecoration = "underline";
       // document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
    } else {
        document.getElementById("textarea").style.fontWeight = "";
        document.getElementById("textarea").style.color = "";
        document.getElementById("textarea").style.textDecoration = "";
        document.body.style.backgroundImage = "";

    }
}