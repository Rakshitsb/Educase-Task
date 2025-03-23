import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
profilePic: {
    type: String,
    default: "",
},
},
{timestamps:true}
);

const User = mongoose.model('userscollection',userSchema);

export default User;