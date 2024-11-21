import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';




const connectDB = async () => { 
    try{
        const connectionString = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB connected!! DB host: ${connectionString.connection.host}`);
    }
    catch(error){
        console.log('mongoDB connection FAILED', error);
        process.exit(1);
    }
}

export default connectDB;