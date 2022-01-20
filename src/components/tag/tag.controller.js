import TagService from "./tag.service.js";
import { status } from "../../utility/statusCode.js";

export const tagList = async ({ body }) => {
  const tag = body.name;
  const list = await TagService.coursesList(tag);
  return [status.OK, list];
};
