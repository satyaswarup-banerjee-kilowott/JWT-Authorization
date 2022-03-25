import mongoose from 'mongoose';

const userSchema1:mongoose.Schema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },

    name:{
        type: String,
        required:true
    },

    isActive:{
        type:Boolean,
        required:true
    }

})

const Customer = mongoose.model('Customer', userSchema1);

export default Customer;