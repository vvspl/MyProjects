const input = document.querySelector('.text-input');
const consoleOutput = () => console.log(input.value);
input.addEventListener('change', consoleOutput);