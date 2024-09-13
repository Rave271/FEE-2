//Object stores complex data  unlike arrays
//Objects can be made using 2 ways:
// 1)Constructor
// 2)Literal

//Storing Value in Constructor
let obj = new Object();
obj.name = 'Raghav';
console.log(obj);

//literals = {Key,value}or in simpler terms {name,value}
let user = {
    name : "Anthony",
    RollN : '55',

}
console.log(user);

//#####################
let obj1 = new Object();
obj1.name = "Raghav Verma";
console.log(obj1);
console.log(typeof (obj1));
//### same thing but using literal method
let obj2 ={
    "Name Full":'    Badcop  John   ',
    Class:'Elite Combine',
RollNumber:"3650",

}

console.log(obj2);
console.log(typeof (obj2));
//printing key and value
console.log(obj2.Name);
//or the better that doesn't throw an error for having whitespaces
console.log(obj2['Name Full'])