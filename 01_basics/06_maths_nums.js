/*const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 189.6267
console.log(otherNumber.toPrecision(3))  // WILL RETURN AS STRING

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

///////       ++++++++++++++++++MATHS+++++++++++++++++++++++++++    ////////////////

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.3))
console.log(Math.ceil(5.3))
console.log(Math.floor(5.3))

console.log(Math.min(5,6,7,8,3,2,4))
console.log(Math.max(5,6,7,8,3,2,4))*/

console.log(Math.random())   //Always gives value between 0 and 1
console.log((Math.random()*10)+1)  //*10 krne pe bhi kabhi kabhi 0 to 1 me reh jata esliye +1
console.log ( Math.floor ( Math.random () *10 ) + 1 )

const min = 10
const max = 20

console.log( Math.floor( Math.random () * ( max - min + 1 ) + min ) ) 
 // +MIN kiya in cases where >= min mandatory 
 // (max - min + 1) when range is given, +1 to avoid zero case


