// Iterator are prototype for objects
//[next(),value];
//iterator:Array,string,map and set

let arr1=[1,2,3,4,5];
console.log(arr1[Symbol.iterator]);
//puts the arr into iterator's symbolic form
//"for of " basically prints those values
// for(x of arr1){
//     console.log(x)'\n';
//     console.log(arr1[x]);
// }

//for objects
let obj = {name : 'Samarth(❤️´艸｀❤️))'};

for(y in obj){
    // console.log(obj[Symbol.iterator]); returns "undefined";
    console.log(obj[y]);
}
