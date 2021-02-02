const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
},{
    timestamps: true
});



const Inventory = mongoose.model( 'Inventory', inventorySchema );


module.exports ={
    Inventory
}