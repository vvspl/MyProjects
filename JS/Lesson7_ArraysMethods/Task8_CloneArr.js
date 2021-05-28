// Клонирование массива
function cloneArr(arr){
    if (!Array.isArray(arr)) return null;
    return [...arr];
}

cloneArr([6,7,8,9])
