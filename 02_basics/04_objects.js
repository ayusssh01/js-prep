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

