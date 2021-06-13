const input = document.querySelector('.text-input');
const printText = (event) => console.log(event.target.value);
input.addEventListener('change', printText);