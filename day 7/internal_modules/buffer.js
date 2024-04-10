// const b = new Buffer.from('ABCDEFGH');
// console.log(b.toString());
// b.write('Other');
// console.log(b.toString());


// const fs = require('fs');
// console.log("Start");
// // fs.writeFileSync('./logs.text',"10th April 2024: Day 7");
// const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});
// console.log(data);
// console.log("End");


// const fsPromises = require('fs/promises');
// console.log("Start")
// const pr = fsPromises.readFile('./myReadMe.txt',{encoding: 'utf-8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("End")


//callback in file system
// const fs = require('fs');

// fs.readFile('./myReadMe.txt',{encoding: "utf8"}, (err,data)=>{
//     console.log(data);
// });


// const http = require('http');
// const app = http.createServer((req,res)=>{
//     console.log('Request received');
//     console.log(req.url);
//     res.end("hello world");
// });
// app.listen(1400);


// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log('Request received');
//     console.log(req.url);
//     res.end('hello');
// });

// server.listen(1400, ()=>{
//     console.log('..........Server Started..........');
// });


// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log('Request received!');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type' : 'text/html',
//     })
//     res.end('<h2>hello!</h2>');
// });

// server.listen(1400, ()=>{
//     console.log('.........Server Started!............')
// })


// const http = require('http');
// const fs = require('fs');

// const data = fs.readFileSync('./data.json','utf8');
// const dataObj = JSON.parse(data);

// const htmlTemplate =

// const cardTemplate = `
//     <div class = 'product-card>
//         <h4>__TITLE__</h4>
//         <p>__INFO__</p>
//     </div>  
// `

// const card1 = cardTemplate.replace('__TITLE__','Xiaomi Note l1 pro');
// const page = htmlTemplate.replace('__PRODUCTS__CARDS__',card1);

// const server = http.createServer((req, res)=>{
//     console.log(req.url);
//     res.writeHead(200,{'content-type' : 'text/html',})
//     res.end(page);
// });

// server.listen(1400, ()=>{
//     console.log('.........Server Started!............')
// })


const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./data.json','utf8');
const dataObj = JSON.parse(data);

const htmlTemplate = ` -
`
const cardTemplate = ` -
`
const card1 = cardTempelate
                    .replaced('__TITLE__','products')
                    .replaced('__INFO__','This is a chinese mobile');

const card2 = cardTempelate
                    .replaced('__TITLE__','Iphone 15')
                    .replaced('__INFO__','description');

const card2 = cardTempelate
                    .replaced('__TITLE__','Iphone 15')
                    .replaced('__INFO__','description');

const card2 = cardTempelate
                    .replaced('__TITLE__','Iphone 15')
                    .replaced('__INFO__','description');