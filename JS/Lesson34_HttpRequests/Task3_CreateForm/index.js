const inputs = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorTxt = document.querySelector('.error-text');

 // проверка на валидацию всех полей
inputs.addEventListener('change', () => {
  if (inputs.reportValidity()) submitBtn.removeAttribute('disabled');
});

// получение данных с формы для отправки на сервер
const mainForm = document.querySelector('.login-form');


// отправка данных на сервер
const baseUrl = 'https://60d8828beec56d0017477359.mockapi.io/api/v1/users';

const onSubmit = (event) => {
    event.preventDefault();
  const taskData = Object.fromEntries(new FormData(mainForm))
  console.log(taskData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  })
  .then((response) => {
    alert(response)  // вывод ответа сервера
    if (response.status===201) mainForm.reset();
    console.log(response);
  })
  .catch(() => {
    errorTxt.textContent = 'Failed to create user';
  });
  ; 
  
};

submitBtn.addEventListener('click', onSubmit);

