 /*   let score ="33"  //score value is string

console.log(typeof score); //checking type of score (string we have taken)
console.log(typeof (score));

let valueInNumber = Number(score)  //score converted into number
console.log(typeof valueInNumber); //now it will print score as number */

//************************************************************************************************************ */

/*
let score="33abc"
console.log(typeof score);
let valueInNumber = Number(score);//defining score as number but it is string
console.log(typeof valueInNumber);// it shows value as number
console.log(valueInNumber) //it shows the value type is not a number(NaN)  */

//************************************************************************************************************ */

/*let score = null
console.log(typeof score); //type is object
let valueInNumber = Number(score); //object value converted to number
console.log(typeof valueInNumber); //prints null as number
console.log(valueInNumber) //shows "0" 
//*****    for undefined value it will show again "NaN" instead of "0" **** */

//**************************************************************************************************************** */

/* 
let score = true
console.log(typeof score);//show true as boolean
let valueInNumber = Number(score);//defining score as number but it is boolean
console.log(typeof valueInNumber);// it shows value as number
console.log(valueInNumber);//it will print 1 which means true and 0 for false */



// note we learned above 
//   "33" => 33
//   "33abc" => Nan 
//   true => 1;false => 0


//********************************************************************************************************** */



let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) //value converted into  boolean
console.log(booleanIsLoggedIn); //boolean value is printed

// notes: for above

// 1 => true;0 => false
// " " => false empty string ke liye value false
//"mks" => true for any string value is true

//*************************************************************************************************************

let anynumber =33
let stringNumber = String(anynumber) //any number converted into string
console.log(stringNumber); // print value
console.log(typeof stringNumber);// it shows 33 as string 
 

