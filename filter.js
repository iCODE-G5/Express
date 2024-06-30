const arr = [3,6,8,9,1,88,10];
console.log(arr)
//filter
const newArr = arr.filter(a=>{
    if (a%2==0)
        return a;
 })
console.log(newArr)
