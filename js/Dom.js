var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.KeyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

