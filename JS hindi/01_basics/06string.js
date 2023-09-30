const name = "mine"
const repocount = 20

// console.log( name +  repocount + " value");  //thse are ways to add 2 variables but its old method so dont prefered

//sconsole.log(`hello my name is ${name} and my repo is ${repocount}`); //modern syntax (string interpulation) is used
// and can do any changes easily


//another way of creating string is 
const gameName = new String('shantanu-sir') //now hitesh is divided into keys like 0,1,2,...

// console.log(gameName[0]); //so we are printing gamename values and 0 key of gamename is h
// console.log(gameName[4]); //here we are printing 4 key of gamename values output:s  
//console.log(gameName.__proto__); //its an amazing syntax which give output object {} which contain values insidde but can be seen in console log


//some methods are....
// console.log(gameName.length); //output is 6
// console.log(gameName.toUpperCase()); //funtion convert values to uppercase
// console.log(gameName.toLocaleLowerCase()); //convert to lower case 
// console.log(gameName.charAt(3)); //tells character at 4 
// console.log(gameName.indexOf('h'));//tells word avilable at that position number
//console.log(gameName.repeat('4')); //repeat the word that num of times

const newString= gameName.substring(0,3) //will not take negative values 
// console.log(newString); //output moh which means it only print 0,1,2 values not 3 one

const anotherString=gameName.slice(-3,6) //output iska hai 'a'
console.log(anotherString);   //can take nagative value and slice mein dono ka common value print hoga


//note:but original value is same as stack changes are done into copy not original.


const newStringone ="   umangvarshney  "
console.log(newStringone); //output " umngvarshney  " have spaces 
console.log(newStringone.trim()); //remove extra space from start to end output "umangvarshney"



const url="https://mks.com/hey%20mks"
console.log(url.replace('%20','-')) //replace one thing with other things.

console.log(url.includes('mks')); //includes will tell ki word jo ham puchege hai ki nhi us (url) variable mein


console.log(gameName.split('-')); //split the values in part within the array











