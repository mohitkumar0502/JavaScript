//     immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

//(fucntion defination)(execution) ()()
//global scope ke polution se prblm hoti hai ki bar toh us global scope ke jo variables hai ya declaration hai
//uske polution ko hatane ke liye hamne IIFE ka use kiya >>>>>>interviw ques
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();                         //yeh run tbtk nhi krega jabtk upr wla close na ho ;



((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);           //name 
} )('mks')                                          //output name is given