
/*let a=300
if(true){
    let a=50
    const b=20
    console.log("INNER" ,a);
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

//console.log(a);
// console.log(b);
// console.log(c);
//++++++++++++++++++++++++++++++++++++nested scope +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username="mks"

    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);          //iska scope curly braces ke sth khtm hogya to yeh execute nhi hoga so it will show undefined

    two()
}

//one()

if (true) {
    const username="mohit"
    if (username==="mohit") {
        const website=" google.com"
        //console.log(username + website);
    }
    //console.log(website);    //same scope khtm phle hi to not defined
}
//console.log(username); //username not defined uska scope bhi upr khtm aur ham bhr print kra rhe

//+++++++++++++++++++++++++++++++++++example+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(addOne(5));                      //declaration se phle bhi use krskte output:6

function addOne(num){                        //aise bhi bnte hai function  
    return num +1

}
addOne(5)

const addTwo = function(num){                        //aise bhi bnte hai function
    return num +2                                    //declaration se phle use nhi kr skte hia error dega
}
addTwo(5)