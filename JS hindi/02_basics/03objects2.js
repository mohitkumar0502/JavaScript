//const tinderUser = new Object()  //singelton object
const tinderUser={}              //non singelton object     note: both are empty objects output{}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);  output:tinderuser:{'id':'123abc',...}

const regularUser={           //declared an object
    email:"shivi@google.com",
    fullname:{                               //added values and declared full name as one more object
       userfullname:{                          //declared object within new object created last
        firstname:"shivi",                      //dclared values of n object(nesting)
        lastname:"js"
       }
    }
}
//console.log(regularUser.fullname.userfullname);     //printing all rquired objects using "."

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}          //declared 3 objects key:string
const obj3={5:"a", 6:"b"}
//const obj3={obj1 , obj2}
//console.log(obj3); //will print 2 objects and values alg alg  output:{obj1:{'1':'a','2':'b'..},obj2{'3':'a'...}}

//const obj4=Object.assign({},obj1,obj2)  //will assing both object into single new object ek mein krega 
//                                       {}is target  and obj1 and 2 are source. (less use hai iska bhi)
//console.log(obj4);  //output:{'1':'a','2':'b'....}  


const obj4={...obj1,...obj2}     //used spread ... to spread the object basically
//console.log(obj4);       //(90% we will use this.) and output is same as above obj4 output. it is simple

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//database se value ati hai toh kse ati hai.

const users=[
    {
        },
    {
    },
    {
        id:1,
        email:"hey@google.com"          //array ka object hai yeh
    },
{
             //aise hi bhut sare objects aur values ati hai database inside array
}

]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));    //sari values leke array mein convert ki ab loop bhi use kr skte hai.
// //output ['id','name','isLoggedIn]
// console.log(Object.values(tinderUser)); //u can also access values inside keys output:['123abc','sammy',false]

// console.log(Object.entries(tinderUser));  //print entries array ke andaaar array type.
//output [['id','123abc'],['name','sammy']...]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //yeh btata hai ki tinderuser ke pass woh proprty hai ki nhi
//output :True           whi loggedin value dene pe output is false kyuki wse koi property he nhi uske pass.

