const baseUrl = 'https://60d5e3f3943aa60017768cd4.mockapi.io/api/v1/tasks';

const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });

const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(mapTasks);


    // createTask({'text':'hallo', 'done':'true'});
    // deleteTask('16');
    getTasksList().then(b=>console.log(b));


