import CategoryModel from "./category.model.js";

export default {
  mostEnrolledCategories: async () => {
    return CategoryModel.aggregate([
      {
        $lookup: {
          from: "courses",
          let: { categoryId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$category", "$$categoryId"] },
              },
            },
            {
              $project: {
                viewsCount: 1,
              },
            },
          ],
          as: "views",
        },
      },
      {
        $project: {
          category: "$name",
          totalViews: {
            $sum: "$views.viewsCount",
          },
        },
      },
    ]);
  },
};
