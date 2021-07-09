var post = document.getElementById("buttonPost");
var clear = document.getElementById("buttonClear");
var mark = document.getElementById("buttonMark");
var del = document.getElementById("buttonDelete");

post.addEventListener("click",todoPost);
clear.addEventListener("click",todoClear);
mark.addEventListener("click",todoMark);
del.addEventListener("click",todoDel);

function todoPost(e) {
    e.preventDefault();

    var to_do = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");
    
    /*
    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${to_do} <br>`
    document.getElementById("todoText").value = "";  */

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    
    label.textContent = to_do;
    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

}

function todoClear() {
    var todos = document.getElementsByName("todo");
    //console.log(todos);

    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }
}

function todoMark() {

    var todos = document.getElementsByName("todo");
    //console.log(todos);

    /*Hay dos maneras de hacerlo
    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
    */

    todos.forEach(function(elemento) {
        elemento.checked = true;
    })

}

function todoDel() {
    /*Para que elimine todo 
    var list = document.getElementById("todoList");
    list.innerHTML = ""; */

    /*Para que elimine los que ya estan marcados */
    var todos = document.getElementsByName("todo");
    todos.forEach(function(elemento) {
        if (elemento.checked){
            elemento.parentElement.remove();
        }
    })

}