const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);      //this current conetx (value) ki bat krta hai.
       
        console.log(this);    //we print this and output is {username:'hitesh',price:999,welcomemessege:[function]}
    }                          //sam,welcome to website {username:sam,price:999,welcomemessage:[function]}
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);                            //output {} kyuki empty hai this ka scope aur hmne kch print krya nhi

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     let username="mks"
//   console.log(this.username);
// }                         //this cant be use in function only in object can be used
//chai()                  //undefined output isiliye const mein use kiya tha this ko above exmp mein

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//how to declare a function through arrow function

// const chai=function(){
//     let username="mks"                                      ek example case
//      console.log(this.username);             //undefined case
// }
// chai()


const chai=() => {                                         //arrow function bngya =>
    let username="mks"
     console.log(this.username);             //undefined case   aur sirf this mein {} ayega output
}
//chai()

//() => {}               //syntax of arrow function

// const addTwo=(num1,num2) => {                       //can be hold in name=(variable)
//     return num1+num2
// }        basic arrow function (1 method)


//implicit return  (2 method)

//const addTwo=(num1,num2) =>num1+num2              //mne man liya hai return nhi likhna aur same line without{}
const addTwo=(num1,num2) =>(num1+num2)             //  {} mein return likhna pdega ()isme nhi likhn hai
          
console.log(addTwo(4,5));                 //output 9

//explicit return mtlb return lgana pd rha hai