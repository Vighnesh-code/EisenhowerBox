import mongoose from "mongoose";

const connectDB = async () => {
  const username = process.env.MONGOOSE_DB_USERNAME;
  const password = process.env.MONGOOSE_DB_PASSWORD;

  try {
    const db = await mongoose.connect(
      `mongodb+srv://${username}:${password}@eisenhowerboxcluster.qb2ohpm.mongodb.net/?appName=EisenhowerBoxCluster`
    );
    console.log("Successfully connected to mongodb database.");
  } catch (error) {
    console.log("Error Connecting to the Database.", error);
  }
};

export default connectDB;
