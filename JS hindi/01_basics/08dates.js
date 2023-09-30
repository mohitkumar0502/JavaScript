//++++++++++++++++++++++++++<<     DATES  >>

let myDate =new Date()  
// console.log(myDate.toString());
// console.log(myDate.toJSON()); //prints full date (y-m-d)and some other timezone
// console.log(myDate.toDateString()); //prints day,month,date,year
// console.log(myDate.toLocaleTimeString());  //prints only time
// console.log(myDate.getUTCDate()); //only tell tarik like 17 tarik
// console.log(myDate.getUTCMilliseconds()); //tells current milisecond
// and many more functions and methods are there.
//console.log(typeof myDate);
//date is an object and we created its instance named myDate

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//let myCreatedDate= new Date(2023, 0, 23)  //month start from 0 in java structure 0-jan,1-feb   //singledigit thats why
//console.log(myCreatedDate.toDateString());  //output: Mon jan 23 2023

// let myCreatedDate= new Date(2023, 0, 23 ,5,3) 
// console.log(myCreatedDate.toLocaleString()); //output is 23/1/2023,5:03:00am

//let myCreatedDate= new Date("2023-01-14")    //month strt from 01 in dd-yy format //01-jan, 02-feb

let myCreatedDate= new Date("01-20-2023") 
// console.log(myCreatedDate.toLocaleString()); //output 20/1/2023 12:00:00am

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //tells about millisecond value
// console.log(myCreatedDate.getTime());  // tells us about milisecond from the date we entered till now


//console.log(Math.floor(Date.now()/1000));  //tells us about seconds value and floor is used for round off.


let newDate= new Date()   //some methods to remember
// console.log(newDate);
// console.log(newDate.getMonth());  //starts from 0 so output of month aug is -"7" //we can add +1 to get month accooding to indian user standards
// console.log(newDate.getDay()); // tell us about day like today is thursday so output is "4"

//in modern we can also use it as 

//console.log(`${  newDate.getDate()} and the time is ${newDate.toLocaleTimeString()}`); //to print easily and modernly value

 console.log(myDate.toLocaleString('default',{ 
    era:"long",hour:"2-digit",                      //in this method we can do all task within it 
    //                                                and can be also add byh ctrl+space to add more function
weekday:"long"
}));
