export const setButton = buttonText =>{
   const baseElem = document.querySelector('body');
baseElem.innerHTML = `<button>${buttonText}</button>`
}

setButton('button text');
