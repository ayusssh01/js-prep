///DESTRUCTURING

const course = {
    name : "jsInHindi",
    price : "999",
    courseInstructor : "Ayush"
}

//console.log(course.courseInstructor)  /// general but less efficient

//const {courseInstructor} = course 
//console.log(courseInstructor); 
const {courseInstructor : instructor} = course    // value kaha se nikalna hai  // instructor stuff is just new naamkaran which is optional
console.log(instructor);    

/*const navbar =  ({company}) => {  ///OBJECT DESTRUCTURING IN REACT
}
navbar (company = "Google")*/


// API --> kuch nhi bas backend se value kaise aati h usko hum likhte h, pehle xml file aati thi ab json file aati hai!
/*{  // json structure

    "name" : "Hitesh",
    "coursename" : "js in Hindi",
    "price ": "free"
}*/

// api ka data not mandatorily object format hi hoga, usme arrays bhi rehta h, dono mix bhi hota h in general

//https://randomuser.me/api/  -->> copy paste data from here, format using jsonn formatter, click on code and see that in tree form, you'll see the data in mix of array and object format

// api data json format me hi hoti h, object format me nhi

