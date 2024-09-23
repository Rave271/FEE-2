//scope 1.Global 2. Func 3.Block 4. Lexical
// 1. Global
// let a=5;
// var b=10;
// const c=15;
//
// function myfunc(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myfunc(a,b,c);
//2.Func scope
function myfun(a,b){
    let c= a+b;
    console.log(c);
}

myfun(3,46);
// console.log(c);