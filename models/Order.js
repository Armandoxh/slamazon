const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    basket:[{
        type: [mongoose.Types.ObjectId],
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