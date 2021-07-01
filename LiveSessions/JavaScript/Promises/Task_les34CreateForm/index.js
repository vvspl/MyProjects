// const inputs = document.querySelector('.login-form');
// const submitBtn = document.querySelector('.submit-button');
// const errorTxt = document.querySelector('.error-text');

// // проверка на валидацию всех полей

// inputs.addEventListener('input', // onInputChange
// () => {
//   if (inputs.reportValidity()) {
//     submitBtn.removeAttribute('disabled');
//   }
// }
// );

// // получение данных с формы для отправки на сервер
// const mainForm = document.querySelector('.login-form');

// // отправка данных на сервер
// const baseUrl = 'https://60d8828beec56d0017477359.mockapi.io/api/v1/users';

// const onSubmit = (event) => {
//   event.preventDefault();
//   const taskData = Object.fromEntries(new FormData(mainForm));
//   console.log(taskData);
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(taskData),
//   })
//   .then((response) => response.json())
//   .then((response) => {
//     alert(JSON.stringify(response)); // вывод ответа сервера
//     mainForm.reset();         // очистка формы
//     })
//     .catch(() => {
//       errorTxt.textContent = 'Failed to create user';
//     });
// };

// submitBtn.addEventListener('click', onSubmit);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const button = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPasword = document.querySelector('#password');
const error = document.querySelector('.error-text');
// console.dir(button);
// button activated
// input: event
// output: undefined
const onValidateForm = () => {
  console.log('123');
  if (form.reportValidity()) {
    button.disabled = false;
  }
};
onValidateForm();
form.addEventListener('input', onValidateForm);
// get data for server
// input:event
// output: undeffined
const getFormData = event => {
  console.log('456');
  event.preventDefault();
  const formData = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({
      ...acc,
      [field]: value,
    }),
    {},
  );
  // const formData = `{${inputEmail.name}:${inputEmail.value}, ${inputName.name}:${inputName.value}, ${inputPasword.name}:${inputPasword.value}}`;
  // const formData = Object.fromEntries(new FormData(inputs));
  console.dir(formData);
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
// then
  // input: callback
  // output: promise

  // callback
  // input: response obj
  // output: any
    .then(response => response.json())
    .then(result => {
      alert(JSON.stringify(result));
      inputEmail.value = '';
      inputName.value = '';
      inputPasword.value = '';
    })
    .catch(() => {
      error.textContent = 'Failed to create user';
      // Promise.reject(new Error('Failed to create user'));
    });
};
form.addEventListener('submit', getFormData);
// input: event
// output: undefined
