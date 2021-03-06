const inputs = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorTxt = document.querySelector('.error-text');

// проверка на валидацию всех полей

inputs.addEventListener('input', // onInputChange
() => {
  if (inputs.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  }
}
);

// получение данных с формы для отправки на сервер
const mainForm = document.querySelector('.login-form');

// отправка данных на сервер
const baseUrl = 'https://60d8828beec56d0017477359.mockapi.io/api/v1/users';

const onSubmit = (event) => {
  event.preventDefault();
  const taskData = Object.fromEntries(new FormData(mainForm));
  console.log(taskData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  })
  .then((response) => response.json())
  .then((response) => {
    alert(JSON.stringify(response)); // вывод ответа сервера
    mainForm.reset();         // очистка формы
    })
    .catch(() => {
      errorTxt.textContent = 'Failed to create user';
    });
};

submitBtn.addEventListener('click', onSubmit);
