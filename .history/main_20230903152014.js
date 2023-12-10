let arr = [NaN, 12, -15, '', undefined, null,  16]
let arr2 = [];
for(let i = 0; i < arr.length; i++)
{
    if(typeof arr[i] === "number" && isNaN())
        arr2.push(arr[i])
}

console.log(arr2);
