let arr = [NaN, 0, 12, -15, '', undefined, null,  16]

const arr1 = arr.filter((value) => {
  if(typeof value == "number"){
        return value;
  }

});
console.log(arr1);
