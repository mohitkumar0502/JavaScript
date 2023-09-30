const score = 400
//console.log(score);  //it automatically detect its a number

const balance = new Number(100)  //we are defining specially its a new object of type number
//console.log(balance);

//****************************************************************************************************** */

// console.log(balance.toString());
// console.log(balance.toString().length);//tells us about the length of string
//console.log(balance.toFixed(2)); //tells about the value after decimal   //used in E-commerse website
// example 100.2333     --- its length is 7 and tofixed(2) output is 100.23


//******************************************************************************************************* */

const anotherNumber = 23.8966
//console.log(anotherNumber.toPrecision(4)); //use,d to give roundoff value jitna apne input diya hai
//output : 23.8966 is 3 precision -- 23.9
//output: 2 precision -- 24         //output : 4 precision is -- 23.90 


const hundred = 100000000
//console.log(hundred.toLocaleString('en-IN'));//  will give number with comma in us standard  
//if we want in indian standard we have to specify like 'en-IN'

//Note: Number. have many other function like MAX_VALUE,MIN_VALUE,MAX_SAFE_INTEGER can be used. 


//++++++++++++++++++++++++++++++++++++++++<<  MATHS >>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));  //changes -ve value into positive and positive remain same.  //function
// console.log(Math.round(4.9)); //round off krdeta hai 5 output hoga 4.9 ka aur wse hi 4.3 ka output 4 hi hoga //function
// console.log(Math.ceil(4.2)); //ceil will choose top value if its above that value output of 4.2 is 5 //function
// console.log(Math.floor(4.9)); //floor will choose low value output of 4.9 is 4  //function
// console.log(Math.min(4,3,6,1,9)); //well tell minimum value from the array
//console.log(Math.max(4,3,6,1,9)); //max value in array

console.log(Math.random());          //always give maths random value from 0 to 1      //its a method
console.log((Math.random()*10) + 1); //give always value from 1 cuz we add and multiply

const min=10   //we created a range of min and max.
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) +min ); //we used floor to give less value and between range 
//max -min and +min so value must be always greater than 10.














