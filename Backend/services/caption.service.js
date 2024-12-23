import captionModel from "../models/caption.model.js";

export const createCaption = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType})=>{
    if(!firstname || !email || !password || !color || !plate || !capacity){
        throw new Error("All fields are required");
    }
    const caption = captionModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }
    })
    return caption;
}
