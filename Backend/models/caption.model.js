import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captionSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [ 13, 'Email must be 13 characters long'],
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email address']
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
    status:{
        type: String,
        enum: [ 'active', 'inactive' ],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [ 3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true,
            minlength: [ 3, 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [ 1, 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        },

    }

    
}) 

captionSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}
captionSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

captionSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captionModel = mongoose.model('caption', captionSchema);

export default captionModel;