import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3, 'First name must be 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [ 13, 'Email must be 13 characters long'],
    },
    password:{
        type: String,
        required: true,
        minlength: [ 6, 'Password must be 6 characters long'],
        select: false
    },
    socketId:{
        type: String,
    },
    
}) 

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token
}
userSchema.methods.comparePassword = async function(){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

export default userModel;