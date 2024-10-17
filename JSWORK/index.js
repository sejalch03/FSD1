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
  

let parent= document.getElementsByClassName("parent");
console.log(parent);

const h1=document.createElement("h1");
console.log(h1);
h1.innerText="abes engineering college";
console.log(h1);
h1.style.backgroundColor="cyan";
h1.style.color="red";
h1.style.padding="20px";
h1.style.marginLeft="300px";
parent[0].appendChild(h1);
const img=document.createElement("img");
img.src="../images/ama star.png";
console.log(img);
img.setAttribute("height","300");
img.setAttribute("width","500");
parent[]/

function getData(){
    console.log("Hi,inside getdata function");
    parent[0].innerHTML="<h2 style=color:yellow >hello getdata function</h2>";
}
const button=document.getElementsByClassName("btn")
console.log(button);
button[0].addEventListener("click",getData);*
const promise=new Promise((resolve,reject)=>{
    let a=5;
    if(a>10){
        resolve("accepted");
    }
    else{
        reject("not accepted");
    }

})
promise.then((msg)=>{console.log(msg)})
.catch((error)=>{console.log(error)})
.finally(()=>console.log("all resources have closed"));
const promise2=new Promise((resolve,reject)=>{
    resolve({name:"SEJAL CHAUHAN",Stack:"MERN STACK"});

})
promise2.then((data)=>{console.log("Hi,"+data.name)})
.catch(x=>{console.log(x)})*/
const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);

    })
})

