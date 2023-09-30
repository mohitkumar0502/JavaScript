// stack (premitive)            stack memory mtlb primitive data type use hoga
// heap (non-premitive)         heap memory mein non prem use hoga

//in stack memory ham  jab variable declare krte hai toh hme copy milta hai us variable ka //change sara copy mein hoga
//in heap memory hame us original value ka reference milta hai //change jo krege original value mein hoga

//example 

let myYoutubename="mohit"   //  we declared primitive data  //num //boolean values
let anothername="myYoutubename"
    anothername="chaiaurcode"

    console.log(myYoutubename);
    console.log(anothername);

    let userOne = {
        email: "user@gmail.com",
         upi: "user@ybl"
  }
let userTwo= userOne
userTwo.email="mks@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
