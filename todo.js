window.addEventListener('load', () => {

    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const task_list = document.getElementById("task-list");
    let todolist = new Array();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let task = input.value;
        addTodoTask();
        const task_list_element = document.createElement('div');

        const task_element = document.createElement('input');
        task_element.type = 'text';
        task_element.value = task;
        task_element.setAttribute('readonly', 'readonly');
        task_list_element.appendChild(task_element);

        const task_done_element = document.createElement('button');
        task_done_element.innerText = 'D';
        task_list_element.appendChild(task_done_element);

        const task_delete_element = document.createElement('button');
        task_delete_element.innerText = 'X';
        task_list_element.appendChild(task_delete_element);

        task_list.append(task_list_element);

        input.value = '';

        task_delete_element.addEventListener('click', (e) => {
            task_list.removeChild(task_list_element);
        });

        task_done_element.addEventListener('click', (e) => {
        
        });

    });

function addTodoTask(){
    if(input.value !== '' && isNaN(Number(input.value))){
        let newTodo = {
          task: input.value,
          status: 'uncompleted'
        };
        todolist.push(newTodo);
      } else {
        alert(inPutElement.value + ' it is not a valid Todo name.');
      }
    }



});

