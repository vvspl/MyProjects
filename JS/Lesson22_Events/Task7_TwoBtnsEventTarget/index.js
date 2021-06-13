const twoBtns = document.querySelectorAll('.btn');
const handleClick = (event) => console.log(event.target.textContent);
twoBtns.forEach(el=> el.addEventListener('click', handleClick));