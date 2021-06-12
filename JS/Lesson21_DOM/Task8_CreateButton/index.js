export const createButton = (buttonText) =>{
    const btn = document.createElement('button');
    btn.textContent = buttonText;
    const baseElement = document.querySelector('body');
    baseElement.append(btn);
}


// createButton('Send Email');
