const mongoose = require('mongoose');

require('dotenv').config();

const Mongo_Url = process.env.MONGO_URL;

mongoose.connect(Mongo_Url).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database:', error);
});
const transactionSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },

    description : {
        type : String,
        required : true 
    },

    datetime : {
        type : String,
        required : true
    }
})


const Transaction = mongoose.model('Transaction', transactionSchema)


module.exports=Transaction;