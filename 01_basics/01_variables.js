const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"

//accountId=2//
accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bangluru"
let accountState;

console.log(accountId);

/* prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])