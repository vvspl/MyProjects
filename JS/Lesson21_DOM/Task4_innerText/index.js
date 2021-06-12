export const getTitle = () => {
    const titleEl = document.querySelector('.title');
  
    return titleEl.textContent;
  };
  
  export const getDescription = () => {
    const descEl = document.querySelector('.about');
  
    return descEl.innerText;
  };
  
  export const getPlans = () => {
    const plansEl = document.querySelector('.plans');
  
    return plansEl.innerHTML;
  };
  
  export const getGoal = () => {
    const goalEl = document.querySelector('.goal');
  
    return goalEl.outerHTML;
  };

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
