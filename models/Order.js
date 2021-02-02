const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    basket:[{
        type: [mongoose.Types.ObjectId],
        ref: 'Inventory'
    }],
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});



const Order = mongoose.model( 'Order', orderSchema );


module.exports = Order;