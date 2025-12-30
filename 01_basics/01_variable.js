const accountID=12345;
let accountName="John Doe";
var accountBalance=1000.50;
accountcity="New York";
// accountID=12; // not allowed
console.log(accountID);
accountBalance=2000.75; // allowed
accountName="Jane Doe"; // allowed
let accountcountry; // so if we do not assign any value it will be undefined
console.table([accountID,accountName,accountBalance,accountcity,accountcountry]);

/*
prefer not to use var because of issues with block scope and functional scope
*/
let x=10;
if(true){
    let x=20;
}
console.log(x);