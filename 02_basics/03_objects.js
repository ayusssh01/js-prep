//Singleton --> jab constructor se object bnate h toh ye bnta h not when we declare it like literals
//object literals

const mySim1 = Symbol("key1");  //"key1" is just a description, not the key name in your object.
//It’s only used to make it easier to identify the Symbol when you log it.So "key1" = label/tag for the Symbol, not the property value. "myKey1" — the value stored in the object

const jsUser = {   // we can define it with both keys & values and access the object through both too
    name : "Ayush", // But in array , we only define the value.
    "full name" : "Ayush Jha",
     //mySim1 : "myKey1", //gives correct output but wrong, the type is string
    [mySim1] : "myKey1", //correct way, the type is symbol //Use the Symbol stored in mySim1(key 1) as a property key,and assign it the value 'myKey1'.”
    age : 22,
    location : "Kolkata",
    email : "Ayush2022@iem.edu.in",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}
console.log(jsUser.email)   // generally people use but doesn't work always
console.log(jsUser["email"]) 
//console.log(jsUser.full name) // error here
console.log(jsUser["full name"]) // this works
//console.log(jsUser.mySim1) // gives correct output but wrong
//console.log(typeof mySim1)  // string  // shows why its wrong

console.log(jsUser[mySim1]) //correct way to print
console.log(typeof mySim1)
console.log(mySim1);  // Symbol(key1)

//🟢The first key1 is just the Symbol’s name
//🟢 The second myKey1 is the data/value stored in the object

// symbol ko object me keys ke roop me add kiya jaata hai, kind of weak encapsulation maana jaata h

