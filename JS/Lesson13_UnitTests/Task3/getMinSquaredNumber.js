export const getMinSquaredNumber = arr => {
    if ((arr.length===0)||(!Array.isArray(arr)))  return null;
   return Math.min(...arr.map(num=>num*num));
}

const arr = [-777, 3, -2, -6, 45, -20];
getMinSquaredNumber(arr);

 