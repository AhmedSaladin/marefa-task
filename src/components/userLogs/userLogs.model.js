import Mongoose from "mongoose";

const userLogs = new Mongoose.Schema(
  {
    userId: String,
    ip: String,
    loggedin: String,
  },
  { timestamps: true }
);

export default Mongoose.model("userLogs", userLogs, "userLogs");
