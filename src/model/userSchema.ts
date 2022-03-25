import mongoose from 'mongoose';

const userSchema4:mongoose.Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

    // phone:{
    //     type: Number,
    //     required:true
    // },

    // work:{
    //     type:String,
    //     required:true
    // }

})

const User = mongoose.model('Onemore', userSchema4);

export default User;