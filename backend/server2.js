const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {

    res.send("Mercato AI Backend Running 🚀");

});


let products = [
    {
        name:"Samsung S21",
        price:"38500 Birr",
        seller:"Abebe Electronics"
    },
    {
        name:"iPhone 15",
        price:"70000 Birr",
        seller:"Tech Market"
    }
];


// Get products
app.get("/products",(req,res)=>{

    res.json(products);

});


// Add product
app.post("/products",(req,res)=>{

    const newProduct = {

        name:req.body.name,

        price:req.body.price,

        seller:req.body.seller

    };


    products.push(newProduct);


    res.json({
        message:"Product added successfully",
        product:newProduct
    });

});


// Server
const PORT = 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
