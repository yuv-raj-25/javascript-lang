let arr = [NaN, 0, 12, -15, '', undefined, null,  16]

const arr1 = arr.filter((value) => {
  return  typeof value === number; 

});
console.log(arr1);