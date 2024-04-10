// async function getApi(){
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     // console.log(pr);
//     const data = await pr.json();
//     console.log(data);
// }
// getApi();


console.log('start');

async function callAPI(){
    const pr = new Promise((res,rej)=>{
        console.log('promise started');
        setTimeout(()=>{
            console.log('timeout 1...')
        },10000);
    })
    console.log('promise 1 completed');
}

callAPI();