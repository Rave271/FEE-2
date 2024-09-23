// console.log(a);returns undefined
var a =10;
Func1();//
console.log(a);

function Func1(){
    var b = 1;
    console.log(b);
}
// function Func2(){}
//Execute context :
//in a call stack or global exe context consists of 2 thinhs:
// 1. Memory Creation Phase
// 2. Code Exec phase
// Imagine a divider between them
// Refer to the code above,
// First the memory is created i.e. the variable and functions in the code are extracted thrown in MCP where the variable are identified as undefined . Then the CEP starts to assign values to the variables and creates a global exe context for the funcs where nested MCP and CEP are  formed,values are assinged as explained above and then \ this nested global exe context is destroyed.


