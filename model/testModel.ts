import mongoose from 'mongoose';

const userSchema5:mongoose.Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    legalName:{
        type:String,
        required:true
    },

    businessName:{
        type:String,
        required:true
    },

    businessType:{
        type:String,
        required:true
    },

    industryType:{
        type:String,
        required:true
    },

    contractRenewal:{
        type:String,
        required:true
    },

    parent:{
        type:String,
        required:true
    }

    
})
// }, {collection: 'k-data'}
// )

const UserData = mongoose.model('Userdata', userSchema5);

export default UserData;