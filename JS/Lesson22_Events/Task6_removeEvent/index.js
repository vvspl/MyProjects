const btn = document.querySelector('.single-use-btn');
const singleUseFunc = () =>{
     console.log('clicked');
     btn.removeEventListener('click', singleUseFunc);
}
btn.addEventListener('click', singleUseFunc);
