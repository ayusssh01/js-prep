let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);   ///object
/*let myCreatedDate = new Date(2025, 0, 25);   //month starts with 0 in js
console.log(myCreatedDate.toDateString());  //Sat Jan 25 2025
let myCreatedDate = new Date(2025, 0, 25 , 5 , 3);
console.log(myCreatedDate.toLocaleString()); // print --> 1/25/2025, 5:03:00 AM
let myCreatedDate = new Date("2025-01-25");*/
//console.log(myCreatedDate.toLocaleString());   // print --> 1/25/2025, 12:00:00 AM
let myTimeStamp = Date.now();
console.log(myTimeStamp);   //gives current time in milliseconds
console.log(myCreatedDate.getTime());   // gives milliseconds fixed of the particular date
//console.log(Math.floor(myTimeStamp/1000)); // converts ms into sec
let diff = myTimeStamp - myCreatedDate.getTime();
console.log(Math.floor(diff/(1000*60*60*24)));/// tells how many days've passed since 25th Jan'25
let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday : "long"
}));
