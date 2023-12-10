let arr = [NaN, 12, -15, '', undefined, null, 0, 16]

const arr1 = arr.filter((value) => {
  if(typeof value === "number" || value == 0){
        return value;
  }

});
console.log(arr1);

function checkZero(val){
    if(val == 0)
        return 0;
}