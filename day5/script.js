// let arr = [2,10,21,32];

// function printPretty(elem){
//     console.log(': ',elem);
// }

// function printArray(arr){
    // for(let i =0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
    // arr.forEach(printPretty);
    // arr.forEach(function printPretty(elem){
    //     console.log(': ',elem);
    // });

//     arr.forEach((a) => {
//         console.log(': ',a);
//     });

//     arr.forEach((a,b,c) => {
//         console.log(': ',a,b,c);
//     });
// }

// printArray(arr);


// function printPretty(elem){
//         console.log(': ',elem);
//     }
// //time is in milisecond
// setTimeout(printPretty,10000);


// console.log('GEC Start');

// function printPretty(){
//    console.log('prettyStart');
//    let ans = 2+3;
//    console.log(ans);
//    console.log('prettyEnd');
// }

// setTimeout(printPretty,10000);
// console.log('GEC end');


// const btn = document.getElementById('btn');
// btn.addEventListener("click", printPretty);


// console.log("start")

// const req = fetch("https://shopatease-2.onrender.com/api/v1/shops");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log("end");


console.log('Start')
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
console.log('End')


   