export const squaredNumbers = () =>{
    const elemList = document.querySelectorAll('.number');
    console.log(elemList);
    const arr = Array.from(elemList);
  
    arr.forEach(el =>{
        const elem = el.dataset;
        el.dataset.number = elem.number*elem.number;
    });
};

// squaredNumbers();