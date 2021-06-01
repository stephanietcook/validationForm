/*  Show input validation Error */
function myValidation() {
    let x = document.getElementById("newTask").value;
    let y = x.includes('<');
    let z = x.includes('>');

    if (y == true) {
        document.getElementById("newTaskError").style.display = "block";

    } else if (z == true) {
        document.getElementById("newTaskError").style.display = "block";
    } else {
        document.getElementById("newTaskError").style.display = "none";
    }
}


/* List */
document.getElementById("submit").onclick = function () {

    let node = document.createElement("li");
    var text = document.getElementById("newTask").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("taskList").appendChild(node);
}
var form = document.getElementById("myForm");


/* After submit – page doesn't refresh */
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);