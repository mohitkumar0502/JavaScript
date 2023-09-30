const myArray=[0, 1 ,2 , 3, 4 ,5 ]
const Heroes=["shaktiman","ironman","spiderman"]
const myArray2= new Array(1,2,3,4)
//console.log(myArray[3]);



//note:const array=[0, 1 ,2 , 3, 4 ,5 , true ,"mks"]   //array can be number ,string ,boolean,objects.
//we can access array by index number like[0] not by "name" .
//array copy operation makes shallow and deep copy //shallow copy means refrence share (change in orginal array too)
//deep dont give refrence copy .
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Array Methods

// myArray.push(7,8)        //insert elemnts in array at end
// myArray.pop()           //removes last elements

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArray.unshift(9,10)      //insert elemnts from starting  //not used often just to remember
// myArray.shift()            //remove elemts from start 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(myArray.includes(6));  //prints value is present in true or false
// console.log(myArray.indexOf(7));   //prints value present at that index //index se bhr input doge to ans -1 dega which means he dontknw

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray=myArray.join()   //add values and print in string format
// console.log(myArray);    //output [0,1,2,3,,4,5]
// console.log(newArray);   //type string and output is 0,1,2,3,4,5
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//slice, splice

console.log("A", myArray);
const myn1= myArray.slice(1,3)   //cut out that portion which we want and print and dsnt manupulate array
console.log(myn1);
console.log("B ",myArray);

const myn2=myArray.splice(1,3) //cut out the portion and modify OR manupulate array 
console.log("C ",myArray);
console.log(myn2);
