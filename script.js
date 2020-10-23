//Define UI element
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define event list
form.addEventListener('submit', addTask);
tasklist.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);

//Define function
//Add task

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task!');
  } else {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value + ' '));
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    tasklist.appendChild(li);
    taskInput.value = '';
  }
  e.preventDefault();
}

//remove task
function removeTask(e) {
  if (e.target.hasAttribute('href')) {
    if (confirm('Are you sure??')) {
      let ele = e.target.parentElement;
      ele.remove();
      // console.log(e.target);
    }
  }
}

// Clear task
function clearTask(e) {
  tasklist.innerHTML = '';
}
// Filter task

function filterTask(e) {
  let text = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
