import { status } from "../utility/statusCode.js";

export default (req, res) => {
  res.status(status.NOT_FOUND).json({ message: "انت بتعمل ايه هنا؟" });
};
