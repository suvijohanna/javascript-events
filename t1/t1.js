// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

function displayTodoList() {
  ul.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];

    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const deleteButton = document.createElement('button');

    input.type = 'checkbox';
    input.id = `todo-${item.id}`;
    input.checked = item.completed;

    input.addEventListener('change', function () {
      item.completed = input.checked;
      console.log(todoList);
    });

    label.htmlFor = input.id;
    label.textContent = item.task;

    deleteButton.innerHTML = '&#x2A09;';
    deleteButton.addEventListener('click', function () {
      todoList.splice(i, 1);
      ul.removeChild(li);
      console.log(todoList);
    });

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  }
}
displayTodoList();

const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('#todoDialog');
const form = document.querySelector('#addTodoForm');

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const text = document.querySelector('dialog input').value;
  const item = {
    id: todoList[todoList.length - 1].id + 1,
    task: text,
    completed: false,
  };
  todoList.push(item);
  console.log(todoList);
  displayTodoList();
  form.querySelector('input').value = '';
  dialog.close();
});
