import TagModel from "./tag.model.js";
export default {
  coursesByTag: (tag) => {
    return TagModel.aggregate([
      {
        $match: {
          name: tag,
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "tag",
          as: "courses",
        },
      },
      {
        $addFields: { totalCourses: { $size: "$courses" } },
      },
      {
        $project: {
          courses: { tag: 0 },
        },
      },
    ]);
  },
};
