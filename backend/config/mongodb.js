import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database connected"))

    console.log('MONGODB_URI', process.env.MONGODB_URI)
    
    await mongoose.connect(`${process.env.MONGODB_URI}/medibooker`)
}

export default connectDB