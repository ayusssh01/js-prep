const marvel_heros = ["Captain America","Ironman","Thor"]
const dc_heros = ["batman","Spiderman","Superman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) // array inside array //proves that array in js can take any data inside it
//["Captain America","Ironman","Thor",["batman","Spiderman","Superman"]]
console.log(marvel_heros[3])  // gives dc_heros in output
console.log(marvel_heros[3][1]) //gives spiderman


const allheros = marvel_heros.concat(dc_heros)   // push modifies the original array but concat doesn't, so it needs to be stored somewhere to see the impact of concat()
console.log(allheros); //added dc_heros element with the marvel_heros elements // properly merges

const all_new_heros = [...marvel_heros,...dc_heros]  //Better than concat as it can merge more than two arrays   // we call it "spread" function
console.log(all_new_heros);   

const another_array = [ 1 , 2 ,[ 3, 4 ] , 5.6 , [6, [7 , "Ayush"]]]
console.log(another_array.flat(2))  
//The maximum recursion depth(here 2). Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Ayush"))   // checks if "Ayush" is array, returns false
console.log(Array.isArray(["Ayush"])) // checks if ["Ayush"] is array, returns true


console.log(Array.from("Ayush"))    // converts any datatype array, breaking down the elements
//returns [ 'A', 'y', 'u', 's', 'h' ]

console.log(Array.from({name : "Ayush"})) // can't convert // read about it

console.log(Array.from(Object.values({ name: "Ayush" }))) 
console.log(Array.from(Object.keys({ name: "Ayush" })))



let score1 = 100
let score2 = 'C'
let score3 = 300

console.log(Array.of(score1,score2,score3)) // returns [ 100, 'C', 300 ]

const obj = {0:'x', 1:'y', length:2};
console.log(Array.from(obj));  
// ['x','y'] → works because 'length' property is there

console.log(Array.from([1,2,3], x => x*2));
// [2,4,6] → each element modified

console.log(Array.from('Ayush', ch => ch.toUpperCase()));
// ['A','Y','U','S','H']

const mySet = new Set([1, 2, 3]);
console.log(Array.from(mySet, x => x*3));
// [3, 6, 9]

const myMap = new Map([['a', 1], ['b', 2]]);
console.log(Array.from(myMap.keys()));
// ['a', 'b']

const obj1 = {0: 5, 1: 10, length: 2};
console.log(Array.from(obj1, x => x + 1));
// [6, 11]

