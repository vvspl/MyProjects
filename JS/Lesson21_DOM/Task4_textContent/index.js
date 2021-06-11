export const getTitle = () =>{
    const a = document.querySelector('.title');
    return a.textContent;
}

export const getDescription = () =>{
    const a = document.querySelector('.about');
    return a.textContent;
}

export const getPlans = () =>{
    const a = document.querySelector('.plans');
    return a.innerHTML;
}

export const getGoal = () =>{
    const a = document.querySelector('.goal');
    return a.innerHTML;
}

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
