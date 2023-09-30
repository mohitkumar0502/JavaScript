const course ={
    coursename:"crashcourse",
    courseprice:"500",
    courseteacher:"mks"
}
const {courseteacher:teacher}=course   //this thing is called as object destructure. //courseteacher:uske bad simple nam rakh skte hai
console.log(teacher);

//when we see anthing written in {}its means destructuring ki ja rhi hai object ki.

//API :zrori nhi api object form me mile array mein bhi milskta hai example
[   {},
    {},
    {}
]         //format of array where obj is inside.