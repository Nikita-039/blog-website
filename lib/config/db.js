import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kairasingh0313:saknik0330@cluster0.nxzix.mongodb.net/blog-app');
    console.log("DB Connected")
}