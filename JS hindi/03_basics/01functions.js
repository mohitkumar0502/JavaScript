function saymyname(){
console.log("M");
console.log("O");           //function -keyword,,saymyname -function name (){ syntax of function  }
console.log("H");
console.log("I");
console.log("T");

}

//saymyname() //saymyname alone is 'reference' function ka(wha rehta hai)and with pernthis() toh uska execution hojyega

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//function addtwonumbers(number1,number2){     //number 1 and 2 are "parameters" of fucnction
   //console.log(number1+number2);
// }
//addtwonumbers(4,5)  //hmne function call kiya aur usme "arguments" pass kiya.

function addtwonumbers(num1,num2){
   // let result=num1+num2
    //return result  //2- way to declare //return ke badd kch bhi print nhi hota hai.

    return num1+num2  //3-way to declare
}
const result =addtwonumbers(3,5)
// console.log("result:",result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*function loginUserMessage(username){

return `${username} justloggedin`

}
//loginUserMessage("mohit@123") //value return krdi usne but print ya store kro hmne bola ni toh 
console.log(loginUserMessage("mohit@123"));       //note:if ul not pass any value its show undefined justloggedin*/

//...............................................................................................................

function loginUserMessage(username){
    if(username===undefined){               //if conditin used in value will empty it will print messege
        console.log("please enter value");  //message
        return                              //used so niche ka kch return nhi hoga output:"(message)undefined
    }

return `${username} justloggedin`             //return kya krna hai

}
//console.log(loginUserMessage());             //print kya krna hai (now empty) //output:please enter value
//                                                                                    undefined justloggedin


//note: if(!username)  ka mtlb hai same as username===undefined (advance way to write)

//+++++++++++++++++++++++++++++++++++++++++++++new lec+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateCartPrice(...num1){              //  ... (rest and spread) now yeh rest hai mtlb values pack krke dega
//   //                                                    function mein rest pass aise krte hai.
//     return num1                                   
// }

// console.log(calculateCartPrice(200,300,400,2000));  //it takes only first in cart baki ignore so we use "rest" to solve this
// //output 1:[200,300,400,2000]    rest ne ... sab combine krdiya array mein aur dediya hame


function calculateCartPrice(val1,val2,...num1){         //declared 2 vlues
    return num1 
}
//console.log(calculateCartPrice(200,300,400,2000));   //output [400,2000] baki number store hoge val 1,2 mein

//+++++++++++++++object ko kse pass krte hai function mein++++++++++++++++++++++++++++++++++++
const user={
    username:"mks",
    price:199
}

function handelObject(anyobject){      //koi bhi function bnya anyobeject name ka
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  //refrence diya object ka aur print

}
//handelObject(user)      //calling function and passing object(user)in it.
//output:  username is mks and price is 199

handelObject({
    username:"sam"               //another way of passsing object directly inside function calling
    ,price:99
})
//output:username is sam and price is 99

//------------------array ke liye kse kre function mein call ---------------------------------------------------

const myNewArray=[200,300,400,100]             //array define kiya with value

function returnSecondValue(getArray){   //function create kiya aur parameter rkha
    return getArray[1]            //array ko return krya aur use 2 value puchi
     
}
// console.log(returnSecondValue(myNewArray)); //function mein array pass kiya//output 300 kyuki second value puchihmne 
//else same 
console.log(returnSecondValue([200,400,500,1000]));         //another way of value

