const mongoose = require('mongoose');
const Schema = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps: true
});




const Inventory = mongoose.model( 'Inventory', inventorySchema );


module.exports =
    Inventory