import TagRepository from "./tag.repository.js";

export default {
  coursesList: async (tag) => {
    const courese = await TagRepository.coursesByTag(tag);
    if (!courese.length) return { message: "no courses with this tag" };
    return courese[0];
  },
};
