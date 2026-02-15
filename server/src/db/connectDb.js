import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_URL}/${DB_NAME}`,
    );

    console.log("server is Connected to Database successfully ");
  } catch (error) {
    console.log("Error occured while connecting to database");
    process.exit(1);
  }
};

export default connectDb;
