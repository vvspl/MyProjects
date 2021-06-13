const chBoxArr = Array.from(document.querySelectorAll('.pagination__page'));
const handleClick = (event) => console.log(event.target.dataset.pageNumber);
chBoxArr.forEach(chBox => chBox.addEventListener('click', handleClick))
