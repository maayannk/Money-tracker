const express = require("express");
const app = express();
const cors = require("cors")
const Transaction = require("./db");
app.use(cors());
app.use(express.json());

app.get("/api/transactions",async (req,res)=>{
    const transactions = await Transaction.find()
    res.json(transactions);
})

app.post('/api/transaction',async(req,res)=>{
   const {name , description , datetime, price} = req.body;

   if(!name || !description || !datetime || !price){
    res.json({
        msg : "All fields are required"
    })
   }
   
   const transaction = await Transaction.create({
    name : name,
    description : description,
    datetime : datetime,
    price : price  
   })

   
   res.json(transaction);
})

app.listen(4040,()=>{
    console.log("Server is running on the port of 4040");
})