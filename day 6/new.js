// const arr = [10,22,34];
// const arr2 = [10.11,22.32,34.76];

// // const ans = arr.map((a)=>{
    // //     console.log(a);
    // //     return a*2;
    // // });
    
    // const ans2 = arr.map(a=>a**2);
    // const ans3 = arr.map(a=>a**2);
    
    // console.log(ans3);
    // // console.log(ans2);
    
    
// const arr = [10,22,34];

// arr.push(99);
// console.log(ans);
// console.log(arr);
// console.log(arr2);


// const arr = [10,22,34];
// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);


// const arr = [
//     'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune', 'India', 'Russia', 'USA'
// ]

// const ans = arr.filter((s)=>{
//     if(s.includes('i') || s.includes('I')){
//         return true;
//     }
//     else false;
// });

// console.log(ans);


// const ans1 = arr.filter((a)=>{
//     const ns = a.toLowerCase();
//     if(ns.includes('india')){return true;}
//     else{return false;}
// });

// const ans2 = arr.filter((a)=>a.toLowerCase().includes('india'));
    
// console.log(ans1);
// console.log(ans2);


const arr = [2,4,8,10];

const ans = arr.reduce((total,curr,c,d)=>{
    console.log(total,curr,c,d);
    return total+curr;
});

