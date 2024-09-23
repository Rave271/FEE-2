//Object stores complex data  unlike arrays
//Objects can be made using 2 ways:
// 1)Constructor
// 2)Literal

//Storing Value in Constructor
let obj = new Object();
obj.name = 'Raghav';
// console.log(obj);

//literals = {Key,value}or in simpler terms {name,value}
let user = {
    name : "Anthony",
    RollN : '55',

}
// console.log(user);

//#####################
// let obj1 = new Object();
// obj1.name = "Raghav Verma";
// console.log(obj1);
// console.log(typeof (obj1));
//### same thing but using literal method
let obj2 ={
    Name : "Badcop",
    "Name Full":'    Badcop  John   ',
    Class:'Elite Combine',
RollNumber:"3650",

}
//Printing
// console.log(obj2);
// console.log(typeof (obj2));
// console.log(obj2.Name);
// console.log(obj2.("Name Full"));
//or the better way that doesn't throw an error for having whitespaces
// console.log(obj2['Name Full'])

//Updating Values
let obj3 ={
    Name : "Alyx",
    Job : "R&D Employee",
    CTC : '$105,000',
    Lambda : "-",
}
obj3.Name = "Gordan Freeman";
// console.log(obj3['Name']);

//Objs inside a array
let arobj1 = {
    Name : '1',
    Class : '2',
    arobj11:{
        Title : 'ALpha',
        Job : 'Beta',
    }
}
let arobj2 = {
    Name : '101',
    Class : '202',
    arobj21:{
        Title : 'Gamma',
        Job : 'PI',
    }
}
let arobj3 = {
    Name : '1001',
    Class : '2002',
}


let arr = [arobj1,arobj2,arobj3];

// console.log(arr[1].arobj21.Title)

//Merging two objects
let obj101 = {Name:'Raghav',Age:19};
let obj201 = {Namde:'Raghav',Adge:19};
let obj301 = {...obj101,...obj201}
console.log(obj301);
//or
console.log(obj101.assign(obj201))


//Nested objs
let users = {
    user1:{
    Name : "Mason",
    Age : 23,
        user1data:{
        SubClass : 'Alpha',
         Title : 'BO1',
        }
    },
    user2:{
        Name : "Woods",
        Age : 25,
    },
    user3:{
        Name : "Hudson",
        Age : 45,
    },
}
// console.log(users.user1.user1data.Title)
