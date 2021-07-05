const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const buttonEl = document.querySelector('.submit-button');
const formEl = document.querySelector('.login-form');
const error = document.querySelector('.error-text');

const getFormData = () =>{
  Object.fromEntries(new FormData(formEl));
};

const validateHandler = () => {
    buttonEl.disabled = !formEl.reportValidity();
};

const submitHandler = (event) => {
  event.preventDefault();
  const formData = getFormData();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((resBody) => {
      alert(JSON.stringify(resBody));

      formEl.reset();
    })
    .catch(() => {
      error.textContent = 'Failed to create user';
    });
};
formEl.addEventListener('submit', submitHandler);
formEl.addEventListener('input', validateHandler);
