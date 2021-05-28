// Среднее арифметическое

const arrAverage = (arr)=>{
  if(!Array.isArray(arr)) return null;
  return (arr.reduce((previous, next)=> previous + next))/arr.length;
}


arrAverage([1,3,4,5,2,6]);
