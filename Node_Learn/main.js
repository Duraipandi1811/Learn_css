// const main=require("./module");

// console.log(main.add(10,20));
// console.log(main.mul(56,20));

const express=require("express");
const app=express();
const user=require("./utils/user");
const products=require("./utils/products");


app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
});

app.listen(3000 ,()=>{
    console.log("Server running on port 3000");
});


// app.get("/api/user",(req,res)=>{
//     console.log(req.query);
//     const{query:{filter,value}}=req;
//     console.log(filter,value);
//     if(filter & value)
//     {
//         return res.send(user.filter(((user)=>user[filter].toLowerCase().include(value))));
//     }else{
//         res.send(user);
//     }
    
// });
 // get the user data and then filter option also used 
app.get("/api/user", (req, res) => {
    const { query: { filter, value } } = req;
    if (filter && value) {
        const result = user.filter(u => {
            const field = u[filter];

            if (typeof field === "string") {
                return field.toLowerCase().includes(value.toLowerCase());
            } else {
                return field == value; // for numbers
            }
        });

        return res.send(result);
    }

    res.send(user);
});





// get the user data with id
app.get('/api/user/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const users= user.find(user=> user.id===id);
    if(!users){
        res.status(404).send("User data Not found");
    }else{
        res.send(users);
    }
});


 // get the products data and then filter option also used 
app.get("/api/products", (req, res) => {
    const { query: { filter, value } } = req;
    if(filter && value) {
        const result = products.filter(p => {
            const field = p[filter];
            if(typeof field === "string") {
                return field.toLowerCase().includes(value.toLowerCase());
            } else {
                return field == value; // for numbers
            }
        });
        return res.send(result);
    }

    res.send(products);
});

// get  the products data with id 

app.get('/api/products/:id',(req,res)=>{
    const productid=parseInt(req.params.id);
    const result=products.find(products=>products.id===productid);

    if(!result){
        return res.status(404).send("Product is not Found");
    }
    else{
        res.send(result);
    }
});

app.post('/api/user',(req,res) =>{
    const newUser = {
        id: user.length+1,
        name: req.body.name,
        age: req.body.age 
    };
    user.push(newUser);
    res.send(newUser);
});