const { error } = require('console');
const fs=require('fs');

// this is Synchronous (block the another line of code) 

fs.writeFileSync("./doc.txt","Hi Hello");
console.log("done");


// this Asynchronous (dont dirturb any other code)  and then if file is already ther its overwrite txt.

fs.writeFile("./document.txt","Hello Welcome to File system learn",(error)=>
{
    if(error){
        console.log(error.message);
    }else{
        console.log("Sucessfully Created without disturb any other task.")
    }
});

//append the txt in file without overwrite

fs.appendFile("./doc.txt","Change the conten without overwrite.",(err)=>
{
    if(err){
        console.log(err.message);
    }else{
        console.log("Text Append Sucessfully.");
    }
});

// this is Synchronous file read
const data=fs.readFileSync("./doc.txt",'utf-8');
console.log(data);

// this is Asynchronous file read
fs.readFile("document.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data);
    }
})

// check the file is present OR not
fs.exists('document.txt', (exists) => {
    console.log(exists);
});

// file delete 
if(fs.existsSync("fs.txt"))
    {
        fs.unlink("fs.txt",(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("File Deleted Done");
    }
})
}

// rename the file
if(fs.existsSync("fx.txt"))
    {
    fs.rename("fx.txt","file.txt",(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("File Rename is Done.");
    }
})
}


// Folder makeing
if(fs.existsSync("myFolder"))
    {
        fs.mkdir('myFolder', (err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("File Rename is Done.");
    }
});
}

// using Stream for larger file reading process

const readstream =fs.createReadStream("document.txt");
readstream.on('data',(chunk)=>{
    console.log(chunk);
});

// using Stream for larger file write process
const writeStream =fs.createWriteStream("document.txt");
writeStream.write("");
writeStream.end()