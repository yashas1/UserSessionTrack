import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const connect = await mongoose.connect('mongodb+srv://bath:bath@cluster0-27vqj.mongodb.net/interviewdatabase?retryWrites=true', {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        
        });
        console.log(`MongoDB Connected: ${connect.connection.host}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
};
export default connectDB;
