//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3              //number can be in decimals or normal  comes under number only

const isLoggedIn = false              
const outsideTemp = null     //null example
let userEmail;   //undefined example 

const id = Symbol('123')        //both have different value as symbol is used for unique value
const anotherId = Symbol('123')  //symbol exmple

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n   //bigint example

//***************************************************************************************************** */



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {                                  //object created and it can have any datatype value
    name: "hitesh",
    age: 22,
}

const myFunction = function(){      //function declared using keywords function(){ } 
    console.log("Hello world");  //inside function we declare hello world
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3  //rules link of JS   