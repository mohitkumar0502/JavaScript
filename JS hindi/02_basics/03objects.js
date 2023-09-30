//singelton  when we declare object as literal then object is not singlton but in constructor it is.
//Object.create constructor method to create obj iske andr hi singlton bnta hai.


//object literals

const mySym=Symbol("key1")

const JsUser ={                                    //curlybraces is call an object and inside it we declare values .
name:"mohit" ,                                      //inn obj u can define ur own key and value.eq-name key and mohit value
fullName:"mohit kumar singh",
age:"22",
[mySym]:"mykey1",          //actual syntax of symbol [] lena hai use define kna hai usekey ki trh act krna hai aur print krna hai
location:"sultanpur",
email:"mks@google.com",
isLoggedIn: false,
lastLoginDays:["monday","wednesday","saturday"]
}  

// console.log(JsUser.email);                //jsuser is a one method to print objects.
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);               //printing symbol in[] cuz otherwise it will be not key but string.
//                                           yehi sytax follow krna hai symbol ke liye[]


JsUser.email="mks@chatgpt.com"        //u can change value simply by overwriting it with equls to .
//Object.freeze(JsUser)                  //here u freezed ur value toh agye change kch bhi nhi hoga.
JsUser.email="mks@yahoo.com"            //value is entered but value dnst change kyuki fix ki hai hamne
// console.log(JsUser);                   //output:mks@chatgpt.com  


JsUser.greeting=function(){                //function declared
    console.log("hello JS User");             //gretttings  value to be printed
}
JsUser.greetingTwo=function(){                
    console.log(`hello JS User,${this.name}`);  //this is used to get properties of same object u want to use
}
console.log(JsUser.greeting());              // printng function  Note:use () after function else it wont print value
//but show function(anonymous) mtlb ki function ka reference dega na ki value
console.log(JsUser.greetingTwo());  