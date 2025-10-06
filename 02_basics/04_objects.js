const tinderUser = new Object(); //singleton object // single copy! //made using object literals
//const tinderUser = {}    // non singleton object //multiple copies created manually           
                           // made using constructor
console.log(tinderUser)  // prints {}
tinderUser.ID = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false;
//console.log(tinderUser) 

const regularUser = {
    email : "Amiyush1029@gmail.com",
    fullname :{
        userfullname:{
            firstname: "Suyash",
            lastname : "Ranjan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
//console.log(regularUser.fullname?.userfullname.firstname) 
//fullname? --> if fullname exists it'll carry on, otherwise it won't

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 ={obj1 , obj2}  // object ke andar objects
//const obj3  = Object.assign({},obj1,obj2); //Yeh curly braces {} ek empty object bana rahe hain, jo target ke roop me kaam karta hai
//console.log(obj3)

const obj3 = {...obj1,...obj2}  // most preferred,spread
console.log(obj3)

const user = [{         /// database se aisa hi milta h
    id : "149",
    email : "Aryan1708@gmail.com"},
    {
    id : "150",
    email : "Aryan1709@gmail.com"
    },
    {

    },
    {

    },
    {

    }
    
]
console.log(user[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser)) //[ 'ID', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ '123abc', 'Ayush', false ]
console.log(Object.entries(tinderUser)) // [ [ 'ID', '123abc' ], [ 'name', 'Ayush' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"))  //true
console.log(tinderUser.hasOwnProperty("isLogged")) //false  

/*[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()*/
