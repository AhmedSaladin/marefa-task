import CategoryRepository from "./category.repository.js";

export default {
  categoriesViews: () => {
    return CategoryRepository.mostEnrolledCategories();
  },
};
