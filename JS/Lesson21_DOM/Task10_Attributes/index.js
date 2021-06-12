export const finishForm = () =>{
    const baseElement = document.querySelector('.login-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'login';
    baseElement.prepend(input);

    const changeElement = document.querySelector('input[name=password]');
    changeElement.type = 'password';
}

// finishForm();