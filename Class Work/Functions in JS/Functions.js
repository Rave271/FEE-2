// function sum (a,b)//declaration name ,a,b are the parameters>
// {
//     console.log(a+b);
// }
// //Func Call
// sum(1,2);
//1,2 are the arguments





//default arguments
// function multiply(a,b){
//     var product =a*b;
//     console.log(product);
// }
// // multiply(product);
// multiply(1);
// multiply(1,2);
//but if

function multiplyv2(a,b=3){
    var product =a*b;
    console.log(product);
}
// multiply(product);
multiplyv2(1);
multiplyv2(1,2);