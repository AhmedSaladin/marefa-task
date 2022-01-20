export const coursesList = {
  description: "get all courses that have the same tag name",
  parameters: [
    {
      name: "role",
      in: "header",
      description: "User role in system",
      required: true,
      example: "admin",
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "development",
            },
          },
        },
      },
    },
  },

  responses: {
    200: {
      description: "A list of all courses that have the same tag name",
    },
    403: {
      description: "role header not provided",
    },
    400: {
      description: "body not provided or body missing parameter",
    },
  },
};
