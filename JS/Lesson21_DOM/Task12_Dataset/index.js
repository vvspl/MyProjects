export const squaredNumbers = () =>{
    const elemList = document.querySelectorAll('.number');
    console.log(elemList);
    const arr = Array.from(elemList);
  
    arr.forEach(el =>{
        const elem = el.dataset;
        // eslint-disable-next-line no-param-reassign
        el.dataset.squaredNumber = elem.number*elem.number;
    });

    const elem = document.querySelector('.number');
    console.log(elem.outerHTML);
};

squaredNumbers();