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

const user = [{
    id : "149",
    email : "Aryan1708@gmail.com"},
    {
    id : "150",
    email : "Aryan1709@gmail.com"
    }
]
console.log(user[1].email)
