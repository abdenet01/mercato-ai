const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;


app.use(express.json());


// Home route

app.get("/", (req,res)=>{

    res.send("Mercato AI Server Running");

});



// Products API

 app.get("/products", (req,res)=>{

    res.json([
        {
            name:"Samsung S21",
            price:"38500 Birr"
        },
        {
            name:"iPhone 15",
            price:"70000 Birr"
        }
    ]);

});

app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});