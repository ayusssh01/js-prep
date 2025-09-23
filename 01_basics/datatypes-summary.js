/*In Js datatypes are categorised into two types based on how the data is stored and accessed

# Primitive(Call by value): esme jab bhi data copy hota hai, memory reference nhi diya jaata hai, balki iska copy diya jata hai and usme hi changes kiye jaate hain!!

7 types: String , Number , Null , Undefined , boolean , symbol , BigInt

# Non-primitive(Call by reference) 

3 types : arrays , Functions , Objects*/

/*let userEmail;  //will be undefined
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
}*/
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
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

