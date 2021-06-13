const chBox = document.querySelector('.task-status');
const chBoxCheck = () => {
    if (chBox.checked) console.log(true);
    else console.log(false);
};
chBox.addEventListener('change', chBoxCheck);