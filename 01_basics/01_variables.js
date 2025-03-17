const accountId = 14453
let accountEmail = "rishi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 not allowed


accountEmail = "rishi@r.com"
accountPassword = "121213"
accountCity = "Bangalore"

console.log(accountId);
// Prefer not to use var because of issue in block and functional scope//

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
