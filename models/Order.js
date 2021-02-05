const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    /**
     * add this to basket object
     * replace with items tag
     * 
     */
     
    pendingOrders:[{
        type: mongoose.Types.ObjectId,
        ref: 'Inventory'
    }],
   
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    /**
     * Completed or pending
     */
    orderStatus:{
    type: String,
    enum :[ 'Completed', 'Pending'],
    default: 'Pending' 
    }
},{
    timestamps: true
});



const Order = mongoose.model( 'Order', orderSchema );


module.exports = Order;