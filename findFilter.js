// arr.find(call back(element,index,array)) /map,find,filter,forEach

//find return first match value
const array1 = [5, 12, 8, 22, 33];
const newArr = array1.find((value) => {
  return value > 12;
});
console.log(newArr);


//findIndex return first match value
const array2 = [5, 12, 8, 22, 33];
const newArr2 = array1.findIndex((value) => {
  return value > 12;
});
console.log(newArr2);

//filter return first match value
const array3 = [5, 12, 8, 22, 33];
const newArr3 = array1.filter((value) => {
  return value > 12;
});
console.log(newArr3);
