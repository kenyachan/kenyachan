function doSomething() {
    var pageText = document.getElementById("text").innerHTML;

    if (pageText == "") {
        document.getElementById("text").innerHTML = "Button clicked!";
    } else {
        document.getElementById("text").innerHTML = "";
    }
}