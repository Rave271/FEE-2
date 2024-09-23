console.log(1+2);//Output:3;

console.log(1+ '2');//Output: 12,it acts as string concatenation

console.log("4"+ "k");//Output: 4k,same reason

console.log(5-"2");//Output: "2"basically got converted back into int;

console.log(10 + "A");//Output: 10A;

console.log(10-"B");//Output: NaN as it can't convert B into int;

console.log(10+"2"-"A");//Output: Same error;

console.log(10+"0"+"1");

//Str to Int
let a ="20";

console.log(typeof a);

let c = Number(a);

console.log(typeof c);

let d =parseInt(a);

console.log(typeof d);