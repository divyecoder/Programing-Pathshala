// let a= new String("hello");
// let b = "hello";
// if(a==b){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


// const obj = {
//     name : "ajay",
//     lastname : "singh",
// }
// console.log(obj);
// document.write(obj);


// const obj = {
//     "name" : "ajay",
//     "lastname" : "singh",
// }

// const str = JSON.stringify(obj);
// console.log(str);


// const obj = {
//     "name" : "ajay",
//     "lastname" : "singh",
// }
// obj.age = 20;
// console.log(obj);


// let arr = [1,2,3,4];
// arr[1]=10;
// arr.push(44);
// arr[10]=20;
// arr.push(33);
// // arr = [2,3,4,5];
// console.log(arr);


// let obj = {
//     name : "john",
//     age : 13
// }
// const arr=[1,2,4];
// arr[1]=7;
// console.log(arr);
// console.log(Array.isArray(arr));

// const checkobj = (obj) => {
//     if(typeof(obj) === "object" && !Array.isArray(obj))
// {
//     return true
// }
//     return false
// }
// console.log(checkobj(arr))


// let obj = {
//     name : "john",
//     age : 13
// }

// const arr=[1,2,4];
// arr[1]=7;

// function checkobj(x){
//     if(Array.isArray(x)){
//         console.log("not obj");
//     }
//     else if(typeof(x)=="object"){
//         console.log("object");
//     }
//     else{
//         console.log("not object");
//     }
// }
// checkobj(arr);


const arr = ["name",2,true,8.5];
const obj = {
    "name" : "ajay",
    age : 20
};

//THREE TYPES OF LOOP 

// for(let i=0; i<3; i++){
//     console.log(i);
// }

// for(let i=0; i<3; i++){
//     console.log(arr[i]);
// }

// for(let i=0; i<3; i++){
//     console.log(obj[i]);
// }

// for(let i of arr){
//     console.log(i);
// }

// for(let i of obj){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(i);
// }

// for(let i in obj){
//     console.log(i);
// }


//DOM
// console.log(window.document)
// // console.log(window)
// console.dir(window.document)
// //console.dir(window)


// const res = document.getElementsByTagName('h3')
const res = document.getElementById('heading')
console.log(res)


