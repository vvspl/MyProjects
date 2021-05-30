finder([2,7,8,8,5,3,9,], 5);
function finder(arr, number){
for (let i=0; i<arr.length; i++){
  if (arr[i]===number) return true;
}
return false;
}