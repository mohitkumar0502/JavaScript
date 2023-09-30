const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes= ["batman","superman","flash"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //dc heroes is 4 elemnt of marvel now //elemmnt can be array also
// console.log(marvel_heroes[3][1]);  //way to print value of 3element aur uske andar ka array ki value access aise hogi.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const allheroes=marvel_heroes.concat(dc_heroes)     //we declared a new value.
// console.log(allheroes);  //concat push 2arrays and combine them to make new array having both array value;.
//output is like ['thor','irmn','spdrmn','btmn','sprmn','flash']  a new array contains both value

//one more easy method

const allnewheroes=[...marvel_heroes,...dc_heroes]
//console.log(allnewheroes);

const another_array = [1 , 2, 3 ,[4 , 5 ,6], 7 , [6 , 7, [4 , 5]]]

const real_another_array = another_array.flat(Infinity)  //flat also combines all depth array into a single
//console.log(real_another_array);                         //infinity is used so that all arrays inside one array can be put together.

// console.log(Array.isArray("mohit")); //tells that value is array or not. outut :boolean<true,false>
 console.log(Array.from("mohit"));  //convert value into arrays. output [m,o,h,i,t]
// console.log(Array.from({name: "mohit"}));  //interesting //output is an empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //create array from set of elements. we have declared 
//[100,200,300]
