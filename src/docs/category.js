export const categoires = {
  description: "get most enrolled categories in platform",
  parameters: [
    {
      name: "role",
      in: "header",
      description: "User role in system",
      required: true,
      example: "admin",
    },
  ],
  responses: {
    200: {
      description: "A list of most enrolled categories",
    },
    403: {
      description: "role header not provided",
    },
  },
};
