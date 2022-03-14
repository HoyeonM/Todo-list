var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if(value) {
        addItemTodo(value); //pass value
        document.getElementById('item').value = ""; //empty the input box!!
    }
});

function addItemTodo(text) {
    var list = document.getElementById('todo');
    var item = document.createElement('li'); //create element that has li tag
    item.innerText = text;

    var buttons = document.createElement('div');//create element that has div tag
    buttons.classList.add('buttons'); //add buttons class to div tag


    var remove = document.createElement('button');//create element that has button tag
    remove.classList.add('remove'); //add remove class to button tag
    remove.addEventListener('click', removeItem);
    remove.innerHTML='<i class="fa-solid fa-trash-can"></i>';//trashcan icon
    //innerHTML:sets or returns the HTML content

    var complete = document.createElement('button');//create element that has button tag
    complete.classList.add('complete');//add  class to div tag
    complete.addEventListener('click', completeItem);
    complete.innerHTML='<i class="fa-solid fa-square-check"></i>';//trashcan icon
        
    buttons.appendChild(remove); //append remove & conmplete to buttons class
    buttons.appendChild(complete);
    item.appendChild(buttons); 

    list.insertBefore(item, list.childNodes[0]); //latest items should be added to the first row
}

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    // To Do List position
    var target = (id === 'todo') //condition
                    ? document.getElementById('completed') //true
                    : document.getElementById('todo'); //false

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

}