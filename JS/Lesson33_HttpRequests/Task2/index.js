const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  // getTasksList logic
  const resp = fetch(baseUrl).then(response => response.json());
  console.log(resp);
  return resp;
  
}

export function getTaskById(taskId) {
  //  getTaskById logic
 return getTasksList().then(data => (data.filter(dat=>dat.id===taskId))[0]);

}

// examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
// });

getTaskById('2').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});
