/*(1) JavaScript arrays are resizable and can contain a mix of different data types
(2) JavaScript array-copy operations create shallow copies. (All standard built-in copy operations  with any JavaScript objects create shallow copies, rather than deep copies).
(3) A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
(4) A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.*/

const myArr = [1,2,3,4,5];
//console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4);  //this style of constructor array or Array object faces problem when there is a single element, it takes that single element as the size of the array!
//console.log(myArr2[0]);


// ARRAY METHODS

myArr.push(6)   //inserts 6 at the back
myArr.push(7)   //inserts 7 at the back
myArr.pop();    //takes out 7(i.e, last inserted element)

myArr.unshift(9)  //adds 9 at the front and shifts the positions of other elements by 1
myArr.shift()  // removes 1st element from the front and brings back the default positions of elements
console.log(myArr);
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))  //gives -1 for element which doesn't exist
console.log(myArr2.indexOf(4))
const newArr = myArr.join()  //converts the array into string
console.log(newArr);
console.log(typeof newArr);  // gives string

// slice , splice

console.log("A ",myArr)   //A [1,2,3,4,5]
const myn1 = myArr.slice(1,3)  // brings out a sub-section of the array,doesn't include last position element, doesn't cause any changes or effect on original array.
console.log(myn1)

console.log("B ",myArr)
const myn2 = myArr.splice(1,3) // brings out a sub-section of the array,includes last position element, removes spliced out elements permanently from the original array.
console.log(myn2)   //[ 2, 3, 4 ]
console.log("C ",myArr)  //[1,5]





