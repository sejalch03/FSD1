//console.log("welcome to js");
//var a=12;
//console.log(a);
//if(a>10){
   // a=23;
 //   console.log("a inside condition"+a);
//}
//console.log("b outside condition :"+b);
/*let a=12;
let b="12";
if(a==b){
    console.log("welcome");
}
else{
    console.log("hello");
}
let myname="amit";
let college="abes ec";
let result=`hi, my name is ${myname} and i m doing engineering from ${college}`;
console.log(result);
*/
/*let key="sname";
const students=[{
    sname:"amit", 
    course:"btech",
    college:"abes ec"
},
/*console.log("name: "+ students.sname + "course: "+ students.course);
const {sname}=students;
console.log(sname);
students[key]="Rahul";
console.log(students);*/
/*{
    sname:"ram",
    course:"mca",
    college:"akgec"

}]
console.log(students[1].sname,students[1].college);
function greeting(msg="welcome"){
    console.log("good morning"+ msg);

}
greeting("Greetings");
function sum(a,b,c=23){
    return a+b+c;

}
let data=sum(12,20);
console.log(data)

function selectlang(language){
    let data;
    if(language=="c"){
        function ccomp(){
            return "c compiler selected";
        
        }
    data=ccomp();
    }
    if(language=="java"){
        function jcomp(){
            return "c compiler selected";
        
        }
    data=jcomp();
    }
return data;
}
let data1= selectlang("c");
console.log(data1);
    */
   console.log("hellooooooo");
   let parent= document.getElementsByClassName("parent");
   console.log(parent);
   parent[0].innerHTML="<h2 STYLE=color:brown>data was changed</h2>";
