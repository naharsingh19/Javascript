const accountId = 12345;
let accountName = "vikram";
var accountPassword = "2343";
accountCity = "delhi"; // can declare variable like this but should not use it
let accountState;

//accountId = 11; //cannot change the value of const once declared
accountName = "nahar";
accountPassword = "43534";

//do not use var as it face difficulties in blocked and functional scope

console.table([accountId,accountName,accountPassword,accountCity,accountState]);