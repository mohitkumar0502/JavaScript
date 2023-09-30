const accountId = 2200      //constant value is unique and cant cahnge like account id 
//accountId = 2 //not allowed
let accountEmail ="mks@google.com"
var accountPassword = "1234"
accountCity = "jaipur" //u can declare variale memory without using let but not a good idea
let accountsate;//if u declare variable and not assign any value then js take it as undefined value

accountEmail = "gg@google.com"
accountPassword = "4567"
accountCity = "bangluru"
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountsate])
// u can print all data in tabular form using above command just using braces []and comma ,