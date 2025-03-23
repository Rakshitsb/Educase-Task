import mongoose from "mongoose";

export const dbConnection=(url)=>{
    mongoose.connect(url)
    .then(console.log('Database conneced'))
    .catch((err)=>{
        console.log(`database error ${err}`)
    })
}