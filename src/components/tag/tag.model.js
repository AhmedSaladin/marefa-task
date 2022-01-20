import Mongoose from "mongoose";

const tagSchema = new Mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export default Mongoose.model("tags", tagSchema, "tags");
