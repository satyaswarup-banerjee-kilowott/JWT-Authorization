import mongoose from 'mongoose';

const userSchema3:mongoose.Schema = new mongoose.Schema({
    userId:{
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
    },

    isBillable:{
        type:Boolean,
        required:true
    },

    weeklyCapacity:{
        type:Number,
        required:true
    },

    roleNamesTsv:{
        type:String,
        required:true
    }

})

const Kusers = mongoose.model('User', userSchema3);

export default Kusers;