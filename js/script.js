// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const errorMessage = document.getElementById('error-message');
const deleteAll = document.getElementById('remove-all');
// Event Listener for add button

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        errorMessage.style.display = 'block';
        inputTask.style.border = '2px solid red';
       
     }
         else {
            taskContainer.appendChild(task);
             errorMessage.style.display = 'none';
             inputTask.style.border = '2px solid black';
         
         }


    inputTask.value = "";

checkButton.addEventListener('click', function(){

    checkButton.parentElement.style.textDecoration =
     "line-through";
});
deleteButton.addEventListener('click', function(){
  
    let target = this.parentNode;

    target.remove();


});




  
});

deleteAll.addEventListener('click', function(){
    taskContainer.innerHTML = '';
});      