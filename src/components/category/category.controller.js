import CategoryService from "./category.service.js";
import { status } from "../../utility/statusCode.js";

export const categoriesViews = async () => {
  const categories = await CategoryService.categoriesViews();

  return [status.OK, categories];
};
