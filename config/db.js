import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const InitiateMongoServer = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default InitiateMongoServer;