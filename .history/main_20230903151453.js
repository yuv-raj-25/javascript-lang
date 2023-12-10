let arr = [NaN, 12, -15, '', undefined, null, 0, 16]

const arr1 = arr.filter((value) => {
  if(typeof value === "number"){
        return value;
  }

});

console.log(arr1);

console.log();