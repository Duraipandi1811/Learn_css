const http=require("http");
const fs=require("fs");
const { text } = require("stream/consumers");
// create the server and then make request and response

// const server=http.createServer((req,res)=>
//     {
//     console.log(req.url)
//     console.log(req.method)
//     // res.setHeader('Content-Type', 'application/json');
//     // res.write(JSON.stringify({name: "Durai"}));
//     if(req.url=='/home')
//     {
//         res.write("Dataa for Home Page");
//         res.end();
//     }   
//     else if(req.url=='/about')
//     {
//         res.write("Dataa for About Page");
//         res.end();
//     }else{
//         res.write("Hello Backend Server");
//         res.end();
//     }
// });
// server.listen(3000);

// rendering the html 
// const server=http.createServer((req,res)=>
// {
//     res.setHeader("content-Type","text/html");
//     res.write("<h1>Header for First page</h2>");
//     res.write("<h4>Content in home page</h>");
//     res.end();
//     console.log(req.url);
// });
// server.listen(3000);

// rendering the full html page for best for realtime 

// const server=http.createServer((req,res)=>{
//     fs.readFile("index.html",(err,data)=>{
//         res.setHeader("content-type","text/html");
//         res.end(data);
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log("Sucessfully worked");
//         }
//     });
    
// });
// server.listen(3000);

const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        fs.readFile("index.html",(err,data)=>
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
        });
    }
    else if(req.url=="/"){
        fs.readFile("index.html",(err,data)=>
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
        });
    }
    else if(req.url=="/about"){
        fs.readFile("about.html",(err,data)=>
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
        });
    }
    else{
        res.writeHead(401,{'content-type':'text/html'});
        res.write("<h1>Page 404 is Found</h1>")
        res.end();
    }
});
server.listen(3000);