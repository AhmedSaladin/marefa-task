import Mongoose from "mongoose";

const categorySchema = new Mongoose.Schema(
  {
    name: String,
    image: String,
    imagType: String,
  },
  { timestamps: true }
);

export default Mongoose.model("categories", categorySchema, "categories");
