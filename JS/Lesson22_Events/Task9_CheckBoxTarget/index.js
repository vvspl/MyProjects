const chBox = document.querySelector('.task-status');
const chBoxCheck = (event) => {
    if (event.target.checked) console.log(true);
    else console.log(false);
};
chBox.addEventListener('change', chBoxCheck);