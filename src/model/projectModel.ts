import mongoose from 'mongoose';

const userSchema2:mongoose.Schema = new mongoose.Schema({
    projectId:{
        type:String,
        required:true
    },

    code:{
        type: String,
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
    }

})

const Project = mongoose.model('Project', userSchema2);

export default Project;