// console.log( 2 > 1 );      true
// console.log( 2 >= 1 );      true
// console.log( 2 < 1 );         false      //known already about this
// console.log( 2 == 1 );       false
// console.log( 2 != 1 );       true

//***************************************************************************************************** */


// console.log("2">1);  //print true as nodejs already convert string into numbers  
// console.log("02">1);  //but it dsnt give predicable result so always convert 2 datatype in 1 and then compare karo

//********************************************************************************************************** */


console.log(null > 0); //null is converted in to number so its print false as 0 0 se bada nhi hoskta
console.log(null == 0); //ans false kyuki null aur 0 alg alg hai kyuki equality check alg work krta comparison se
console.log(null >= 0);  //comparison converts null into number so  0=0 hogya is liye true

//Note :  undefined give all false in above cases (*****remember for interview)
// Avoid these types of conversion language inconsistency

//****************************************************************************************************** */



// === check krta hai values aur unki datatypes ko bhi strictly
console.log("2" === 2);  //ans false cuz both are not same one is string and another one is integer value



