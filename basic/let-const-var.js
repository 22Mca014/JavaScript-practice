const accountId=12458
// lock the value hare value is locked we can not change the  value.
let accountEmail="d12mondal@gmail.com"
var accountPassword="12345"
accountCity="Kolkata"
// accountId=4 //not allowed
console.log(accountId);
accountEmail="12@gmail.com"
accountPassword="145854"
accountCity="bbc"
console.table([accountId,accountEmail,accountPassword,accountCity])
/*
prefer not to use var
because of issue in block scope and functional scope
*/