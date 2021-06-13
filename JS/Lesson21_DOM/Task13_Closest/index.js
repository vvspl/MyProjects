export const getSection = (num) =>{
const elem = document.querySelector(`span[data-number="${num}"]`);
return elem.closest('.box').dataset.section;
}

// const a = getSection(2);
// console.log(a);