
import mongoose from "mongoose";

const sponsorSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    linkedin:{
        type:String,
        required:true,
    },
    twitter:{
        type:String,
        required:true
    }

})
export default sponsorSchema