let arr = [NaN, 12, -15, '', undefined, null,  16]

const arr1 = arr.filter((value) => {
    return typeof value === "number" && !isNaN(value);
});

console.log(arr1);
