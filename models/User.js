
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: String,
    company:{
        type:String,
        
    },
    googleId: String,
    orders:{
        type: [mongoose.Types.ObjectId],
        ref:'Order'
    }
},{
    timestamps: true
});



const User = mongoose.model( 'User', userSchema );


module.exports = User;