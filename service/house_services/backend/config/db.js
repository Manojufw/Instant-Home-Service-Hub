import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Vinay:Vins03ash787898@cluster0.4sy2y.mongodb.net/service-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.