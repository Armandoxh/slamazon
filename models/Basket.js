/**
 *  items:[{
        type: mongoose.Types.ObjectId,
        ref: 'Inventory'
    }],
 */
/**
 * create basket schema
 */

const mongoose = require('mongoose');



const basketSchema = new mongoose.Schema({
    items:[{
        type: mongoose.Types.ObjectId,
        ref: 'Inventory',
    }],
},{
    timestamps: true
});

const Basket = mongoose.model( 'Basket', basketSchema );
module.exports=Basket;