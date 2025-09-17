const accountID = 12325
let accountEmail ="rise2526@gmail.com"
var accountPassword = "1234"
accountCity = "Noida"
let accountState
/*prefer not to use var because of 
issue in block and functional scope*/

//accountID = 2 //not allowed
console.log(accountID);
accountEmail="alwaysrise@gmail.com"
accountPassword = "98765"
accountCity = "Hyderabad"

console.table([accountID,accountEmail,accountPassword,accountCity]);
console.log(accountState);
