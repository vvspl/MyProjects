/* eslint-disable arrow-body-style */
/* eslint-disable prefer-rest-params */
export function sumOfSquares(){
    return [].reduce.apply(arguments, [(acc, elem) => {
        return acc + elem*elem;
    }, 0]);
}

console.log(sumOfSquares(1,2,3,4));