/*In Js datatypes are categorised into two types based on how the data is stored and accessed

# Primitive(Call by value): esme jab bhi data copy hota hai, memory reference nhi diya jaata hai, balki iska copy diya jata hai and usme hi changes kiye jaate hain!!

7 types: String , Number , Null , Undefined , boolean , symbol , BigInt

# Non-primitive(Call by reference) 

3 types : arrays , Functions , Objects*/

let userEmail;  //will be undefined
const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId);
console.log(userEmail)
const bigNumber = 6489461891651564156n
const heros = ["Shaktiman","Naagraj","doga"]
let myObj = {
    name : "Ayush Jha",
    age : 22,
}
const myFunction = function(){
    console.log("Hello World");
}
//Return type of variables in JavaScript
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// STACK MEMORY(primitive) , HEAP MEMORY(non-primitive)

let myYoutubename = "Code-ki-charcha"
let anotherName = myYoutubename ; //myYoutubename ke copy ko anotherName me copy kiya gya
anotherName = "Coding-cubicles"  // and ye over-write kiya gya 

console.log(myYoutubename) // prints Code-ki-charcha
console.log(anotherName)   // prints Coding-cubicles

let userOne = {
    email: "userOne@google.com",
    upi : "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "Amiyush1029@google.com"

console.log(userOne.email)  //prints Amiyush1029@google.com
console.log(userTwo.email)  //prints Amiyush1029@google.com     
//Heap memory me original bhi change ho jaata hai

/*NOTE : JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

*/